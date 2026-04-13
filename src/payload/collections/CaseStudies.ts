import { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'industry', 'updatedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Title' },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: { position: 'sidebar' },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    { name: 'client', type: 'text', required: true, label: 'Client' },
    { name: 'industry', type: 'text', label: 'Industry' },
    { name: 'challenge', type: 'textarea', required: true, label: 'Challenge' },
    { name: 'solution', type: 'textarea', required: true, label: 'Solution' },
    { name: 'results', type: 'textarea', required: true, label: 'Results' },
    {
      name: 'metrics',
      type: 'array',
      label: 'Key Metrics',
      fields: [
        { name: 'label', type: 'text', required: true, label: 'Label' },
        { name: 'value', type: 'text', required: true, label: 'Value' },
      ],
    },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Image' },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published At',
      admin: { position: 'sidebar' },
    },
  ],
}
