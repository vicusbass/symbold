import {defineField, defineType} from 'sanity'

export const workPage = defineType({
  name: 'workPage',
  title: 'Work Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Work',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'portfolio'}],
        },
      ],
      description: 'Add and reorder projects to display on the Work page',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      projectCount: 'projects.length',
    },
    prepare({title, projectCount}) {
      return {
        title: title || 'Work Page',
        subtitle: projectCount
          ? `${projectCount} project${projectCount !== 1 ? 's' : ''}`
          : 'No projects added',
      }
    },
  },
})
