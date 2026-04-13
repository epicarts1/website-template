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
      minRows: 1,
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'Image' },
        { name: 'caption', type: 'text', label: 'Caption' },
      ],
    },
  ],
}
