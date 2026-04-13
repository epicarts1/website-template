import { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  labels: { singular: 'Features', plural: 'Features' },
  fields: [
    { name: 'heading', type: 'text', required: true, label: 'Heading' },
    { name: 'description', type: 'textarea', label: 'Description' },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      fields: [
        { name: 'icon', type: 'text', required: true, label: 'Icon (Emoji)' },
        { name: 'title', type: 'text', required: true, label: 'Title' },
        { name: 'description', type: 'textarea', required: true, label: 'Description' },
      ],
    },
  ],
}
