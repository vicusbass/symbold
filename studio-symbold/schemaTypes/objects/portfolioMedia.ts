import {defineField, defineType} from 'sanity'

export const portfolioMedia = defineType({
  name: 'portfolioMedia',
  title: 'Portfolio Media',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Media Type',
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
      title: 'Image',
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
      title: 'Video',
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
  ],
  preview: {
    select: {
      mediaType: 'mediaType',
      image: 'image',
      alt: 'image.alt',
    },
    prepare({mediaType, image, alt}) {
      return {
        title: alt || 'Media',
        subtitle: mediaType === 'image' ? 'Image' : 'Video',
        media: image,
      }
    },
  },
})
