import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'media1Desktop',
      title: 'Media 1 - Desktop',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
      description: 'First media item for desktop viewports',
    }),
    defineField({
      name: 'media1Mobile',
      title: 'Media 1 - Mobile',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
      description: 'First media item for mobile viewports',
    }),
    defineField({
      name: 'media2Desktop',
      title: 'Media 2 - Desktop',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
      description: 'Second media item for desktop viewports',
    }),
    defineField({
      name: 'media2Mobile',
      title: 'Media 2 - Mobile',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
      description: 'Second media item for mobile viewports',
    }),
    defineField({
      name: 'media3Desktop',
      title: 'Media 3 - Desktop',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
      description: 'Third media item for desktop viewports',
    }),
    defineField({
      name: 'media3Mobile',
      title: 'Media 3 - Mobile',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
      description: 'Third media item for mobile viewports',
    }),
  ],
  preview: {
    select: {
      media1Desktop: 'media1Desktop.image',
      media1Type: 'media1Desktop.mediaType',
      media2Desktop: 'media2Desktop.image',
      media2Type: 'media2Desktop.mediaType',
      media3Desktop: 'media3Desktop.image',
      media3Type: 'media3Desktop.mediaType',
    },
    prepare({media1Desktop, media1Type, media2Desktop, media2Type, media3Desktop, media3Type}) {
      const mediaCount = [media1Desktop, media2Desktop, media3Desktop].filter(Boolean).length
      return {
        title: 'About Page',
        subtitle: `${mediaCount} media items configured`,
        media: media1Desktop || media2Desktop || media3Desktop,
      }
    },
  },
})
