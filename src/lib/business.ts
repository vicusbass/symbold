/**
 * Symbold's public business details: the single source for the contact page and the
 * site-wide JSON-LD (src/components/SiteSchema.astro). Keep them identical to the
 * Google Business Profiles; never fill a missing value with a guess.
 */

export const SITE_URL = 'https://www.symbold.ro';

/**
 * Everything Symbold offers, for llms.txt and the JSON-LD offer catalog. The /about/ service
 * tags are a shorter, design-only selection.
 */
export const SERVICES = [
  'Brand Identity',
  'Brand Strategy',
  'Naming',
  'Packaging Design',
  'Web Design',
  'Web and App Development',
  'UI/UX',
  'Graphic Design',
  'Motion Design',
  'Brand Manual',
  'Social Media Management',
  'Advertising Campaigns',
];

/** Public contact email; also where the contact form delivers (src/pages/api/send-email.ts) */
export const EMAIL = 'office@symbold.ro';

export interface Office {
  /** Fragment used for the schema @id, e.g. `${SITE_URL}/#office-cluj-napoca` */
  id: string;
  /** Visible heading on the contact page */
  label: string;
  /** Visible address lines on the contact page */
  addressLines: string[];
  /** Phone as shown on the page */
  phoneDisplay: string;
  /** Phone in E.164, for tel: links and schema */
  phone: string;
  /** Google Maps link for the visible address */
  mapUrl: string;
  /** Schema.org PostalAddress fields */
  address: {
    streetAddress: string;
    postalCode?: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: 'RO';
  };
  geo?: { latitude: number; longitude: number };
}

export const OFFICES: Office[] = [
  {
    id: 'office-cluj-napoca',
    label: 'Cluj-Napoca Office',
    addressLines: ['Theodor Capidan 1'],
    phoneDisplay: '0728 297 829',
    phone: '+40728297829',
    mapUrl: 'https://maps.app.goo.gl/LNNu2zjyo3g1jjbH7',
    address: {
      streetAddress: 'Strada Theodor Capidan 1',
      postalCode: '400462',
      addressLocality: 'Cluj-Napoca',
      addressRegion: 'Cluj',
      addressCountry: 'RO',
    },
    geo: { latitude: 46.7524624, longitude: 23.6041259 },
  },
  {
    // TODO(seo): Bucharest postalCode, geo and a Business Profile map link are not
    // confirmed yet (see docs/seo-backlog.md). mapUrl is a plain Maps search for the address.
    id: 'office-bucuresti',
    label: 'Bucharest Office',
    addressLines: ['Clucerului street 62-64', 'Sector 1'],
    phoneDisplay: '0741 067 040',
    phone: '+40741067040',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Strada%20Clucerului%2062-64%2C%20Sector%201%2C%20Bucure%C8%99ti',
    address: {
      streetAddress: 'Strada Clucerului 62-64, Sector 1',
      addressLocality: 'București',
      addressRegion: 'București',
      addressCountry: 'RO',
    },
  },
];
