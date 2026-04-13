import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order', 'updatedAt'],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Service Name' },
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
            if (!value && data?.name) {
              return data.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    { name: 'description', type: 'textarea', required: true, label: 'Description' },
    { name: 'icon', type: 'text', label: 'Icon (Emoji)' },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        { name: 'feature', type: 'text', required: true, label: 'Feature' },
      ],
    },
    { name: 'pricing', type: 'text', label: 'Pricing' },
    { name: 'ctaLabel', type: 'text', label: 'CTA Label', defaultValue: 'Mehr erfahren' },
    { name: 'ctaLink', type: 'text', label: 'CTA Link' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Image' },
    {
      name: 'order',
      type: 'number',
      label: 'Sort Order',
      admin: { position: 'sidebar' },
    },
  ],
}
