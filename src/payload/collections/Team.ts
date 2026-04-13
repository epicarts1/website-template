import { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order', 'updatedAt'],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Name' },
    { name: 'role', type: 'text', required: true, label: 'Role' },
    { name: 'bio', type: 'textarea', label: 'Bio' },
    { name: 'photo', type: 'upload', relationTo: 'media', label: 'Photo' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'linkedin', type: 'text', label: 'LinkedIn URL' },
    {
      name: 'order',
      type: 'number',
      label: 'Sort Order',
      admin: { position: 'sidebar' },
    },
  ],
}
