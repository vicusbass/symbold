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
