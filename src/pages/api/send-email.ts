import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// This is necessary for the API route to be server-rendered
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json();
    const { firstName, lastName, email, phone, subject, message, terms } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return new Response(JSON.stringify({ message: 'All required fields must be filled.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!terms) {
      return new Response(
        JSON.stringify({ message: 'You must agree to the Terms and Conditions.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'request@symbold.ro',
      to: 'office@symbold.ro',
      replyTo: email,
      subject: `New contact message from ${firstName} ${lastName} - ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p style="font-size: 12px; color: #666;">The sender has agreed to the Terms and Conditions and Privacy Policy.</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ message: 'Failed to send email. Please try again.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ message: 'An error occurred while sending the message.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
