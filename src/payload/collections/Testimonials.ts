import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'rating', 'updatedAt'],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Name' },
    { name: 'company', type: 'text', label: 'Company' },
    { name: 'quote', type: 'textarea', required: true, label: 'Quote' },
    {
      name: 'rating',
      type: 'number',
      label: 'Rating',
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    { name: 'photo', type: 'upload', relationTo: 'media', label: 'Photo' },
  ],
}
