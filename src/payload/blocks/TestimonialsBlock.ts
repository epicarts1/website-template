import { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials-block',
  labels: { singular: 'Testimonials', plural: 'Testimonials' },
  fields: [
    { name: 'heading', type: 'text', required: true, label: 'Heading' },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      label: 'Testimonials',
    },
  ],
}
