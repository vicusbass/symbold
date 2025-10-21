import {defineField, defineType} from 'sanity'

// Full width media row
export const portfolioRowFull = defineType({
  name: 'portfolioRowFull',
  title: 'Full Width Media',
  type: 'object',
  fields: [
    defineField({
      name: 'desktopMedia',
      title: 'Desktop Media',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mobileMedia',
      title: 'Mobile Media',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      desktopType: 'desktopMedia.mediaType',
      mobileType: 'mobileMedia.mediaType',
      image: 'desktopMedia.image',
    },
    prepare({desktopType, mobileType, image}) {
      return {
        title: 'Full Width',
        subtitle: `Desktop: ${desktopType === 'image' ? 'Image' : 'Video'} | Mobile: ${mobileType === 'image' ? 'Image' : 'Video'}`,
        media: image,
      }
    },
  },
})

// Media with description row
export const portfolioRowWithDescription = defineType({
  name: 'portfolioRowWithDescription',
  title: 'Media with Description',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
      title: 'Media',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionPosition',
      title: 'Description Position (Desktop)',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'right',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      mediaType: 'media.mediaType',
      description: 'description',
      image: 'media.image',
    },
    prepare({mediaType, description, image}) {
      return {
        title: 'Media + Description',
        subtitle: description ? description.substring(0, 50) + '...' : `Media: ${mediaType === 'image' ? 'Image' : 'Video'}`,
        media: image,
      }
    },
  },
})

// Split (two media items side by side on desktop, stacked on mobile)
export const portfolioRowSplit = defineType({
  name: 'portfolioRowSplit',
  title: 'Split (Two Media)',
  type: 'object',
  fields: [
    defineField({
      name: 'leftMedia',
      title: 'Left Media (Desktop) / Top Media (Mobile)',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
      description: 'Displays on the left on desktop, first (top) on mobile',
    }),
    defineField({
      name: 'rightMedia',
      title: 'Right Media (Desktop) / Bottom Media (Mobile)',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
      description: 'Displays on the right on desktop, second (bottom) on mobile',
    }),
  ],
  preview: {
    select: {
      image: 'leftMedia.image',
    },
    prepare({image}) {
      return {
        title: 'Split Row',
        subtitle: `Desktop: 2 items side-by-side | Mobile: 2 items stacked`,
        media: image,
      }
    },
  },
})

// Plain text row
export const portfolioRowText = defineType({
  name: 'portfolioRowText',
  title: 'Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text Content',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
      description: 'Plain text content',
    }),
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare({text}) {
      return {
        title: 'Text Block',
        subtitle: text ? text.substring(0, 60) + (text.length > 60 ? '...' : '') : 'No text',
      }
    },
  },
})
