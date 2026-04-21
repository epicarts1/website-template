import { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',
  labels: { singular: 'Gallery', plural: 'Galleries' },
  fields: [
    { name: 'heading', type: 'text', required: true, label: 'Heading' },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'Image' },
        { name: 'caption', type: 'text', label: 'Caption' },
      ],
    },
    {
      name: 'showPlaceholders',
      type: 'checkbox',
      label: 'Show placeholders when no images are uploaded',
      defaultValue: true,
    },
    {
      name: 'placeholderCount',
      type: 'number',
      label: 'Number of placeholders',
      defaultValue: 6,
      min: 1,
      max: 12,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.showPlaceholders),
      },
    },
    {
      name: 'placeholderLabel',
      type: 'text',
      label: 'Placeholder label',
      defaultValue: 'Foto folgt',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.showPlaceholders),
      },
    },
  ],
}
