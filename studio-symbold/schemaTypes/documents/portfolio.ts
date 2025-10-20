import {defineArrayMember, defineField, defineType} from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'hero',
      title: 'Hero Media',
      type: 'portfolioMedia',
      validation: (Rule) => Rule.required(),
      description: 'Main hero image or video for the project',
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Team members and roles (one per line)',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'content',
      title: 'Content Rows',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'portfolioRowFull',
          title: 'Full Width Media',
        }),
        defineArrayMember({
          type: 'portfolioRowWithDescription',
          title: 'Media with Description',
        }),
        defineArrayMember({
          type: 'portfolioRowSplit',
          title: 'Split (Two Media)',
        }),
      ],
      description: 'Drag and drop to reorder content rows',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'hero.image',
      mediaType: 'hero.mediaType',
    },
    prepare({title, publishedAt, media, mediaType}) {
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'No date'
      return {
        title: title,
        subtitle: `${date} | ${mediaType === 'image' ? 'Image' : 'Video'} hero`,
        media,
      }
    },
  },
})
