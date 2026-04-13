import { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',
  labels: { singular: 'Call to Action', plural: 'Calls to Action' },
  fields: [
    { name: 'heading', type: 'text', required: true, label: 'Heading' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'buttonLabel', type: 'text', required: true, label: 'Button Label', defaultValue: 'Jetzt starten' },
    { name: 'buttonLink', type: 'text', required: true, label: 'Button Link', defaultValue: '/kontakt' },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'gradient',
      options: [
        { label: 'Gradient', value: 'gradient' },
        { label: 'Outline', value: 'outline' },
        { label: 'Dark', value: 'dark' },
      ],
    },
  ],
}
