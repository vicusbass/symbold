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
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects Section',
      type: 'object',
      description: 'Featured projects to display on the main page',
      fields: [
        {
          name: 'projects',
          title: 'Projects',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'featuredProject',
              title: 'Featured Project',
              fields: [
                {
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
                },
                {
                  name: 'image',
                  title: 'Project Image',
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
                  description: 'Image to display on the main page',
                },
                {
                  name: 'video',
                  title: 'Project Video',
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
                  description: 'Video to display on the main page',
                },
                {
                  name: 'projectReference',
                  title: 'Project Reference',
                  type: 'reference',
                  to: [{type: 'portfolio'}],
                  validation: (Rule) => Rule.required(),
                  description: 'Link to the portfolio project',
                },
              ],
              preview: {
                select: {
                  title: 'projectReference.title',
                  media: 'image',
                  mediaType: 'mediaType',
                },
                prepare({title, media, mediaType}) {
                  return {
                    title: title || 'Untitled Project',
                    subtitle: mediaType === 'image' ? 'Image' : 'Video',
                    media,
                  }
                },
              },
            },
          ],
          validation: (Rule) => Rule.required().length(3),
          description:
            'Add exactly 3 featured projects (first will be full width, other two split)',
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
