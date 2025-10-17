import {defineField, defineType} from 'sanity'

export const mainPage = defineType({
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'heroSection',
      validation: (Rule) => Rule.required(),
    }),
    // Placeholder for future sections
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects Section',
      type: 'object',
      description: 'Coming soon: Featured projects section configuration',
      fields: [
        {
          name: 'placeholder',
          title: 'Placeholder',
          type: 'string',
          hidden: true,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      hero: 'hero.title',
    },
    prepare({title, hero}) {
      return {
        title: title || 'Main Page',
        subtitle: hero ? `Hero: ${hero}` : 'No hero configured',
      }
    },
  },
})
