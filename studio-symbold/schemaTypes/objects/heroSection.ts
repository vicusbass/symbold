import {defineField, defineType} from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    // Desktop/Main Hero
    defineField({
      name: 'mediaType',
      title: 'Desktop Media Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video (Mux)', value: 'video'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'image',
    }),
    defineField({
      name: 'image',
      title: 'Desktop Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      hidden: ({parent}) => parent?.mediaType !== 'image',
      validation: (Rule) =>
        Rule.custom((image, context) => {
          const parent = context.parent as {mediaType?: string}
          if (parent?.mediaType === 'image' && !image) {
            return 'Image is required when media type is Image'
          }
          return true
        }),
    }),
    defineField({
      name: 'video',
      title: 'Desktop Video',
      type: 'mux.video',
      hidden: ({parent}) => parent?.mediaType !== 'video',
      validation: (Rule) =>
        Rule.custom((video, context) => {
          const parent = context.parent as {mediaType?: string}
          if (parent?.mediaType === 'video' && !video) {
            return 'Video is required when media type is Video'
          }
          return true
        }),
    }),
    // Mobile Hero
    defineField({
      name: 'mobileMediaType',
      title: 'Mobile Media Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video (Mux)', value: 'video'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'image',
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      hidden: ({parent}) => parent?.mobileMediaType !== 'image',
      validation: (Rule) =>
        Rule.custom((image, context) => {
          const parent = context.parent as {mobileMediaType?: string}
          if (parent?.mobileMediaType === 'image' && !image) {
            return 'Mobile image is required when mobile media type is Image'
          }
          return true
        }),
    }),
    defineField({
      name: 'mobileVideo',
      title: 'Mobile Video',
      type: 'mux.video',
      hidden: ({parent}) => parent?.mobileMediaType !== 'video',
      validation: (Rule) =>
        Rule.custom((video, context) => {
          const parent = context.parent as {mobileMediaType?: string}
          if (parent?.mobileMediaType === 'video' && !video) {
            return 'Mobile video is required when mobile media type is Video'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
      mediaType: 'mediaType',
    },
    prepare({title, subtitle, media, mediaType}) {
      return {
        title: title || 'Hero Section',
        subtitle: subtitle || `Media: ${mediaType || 'none'}`,
        media,
      }
    },
  },
})
