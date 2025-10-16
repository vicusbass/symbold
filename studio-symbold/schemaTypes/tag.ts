import {defineField, defineType} from 'sanity';

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      options: {
        source: 'text',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hoverColor',
      title: 'Hover Color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      order: 'order',
    },
    prepare({title, order}) {
      return {
        title: title,
        subtitle: `Order: ${order}`,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
});
