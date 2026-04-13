import { Block } from 'payload'

export const Pricing: Block = {
  slug: 'pricing',
  labels: { singular: 'Pricing', plural: 'Pricing' },
  fields: [
    { name: 'heading', type: 'text', required: true, label: 'Heading' },
    {
      name: 'plans',
      type: 'array',
      label: 'Plans',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Plan Name' },
        { name: 'price', type: 'text', required: true, label: 'Price' },
        { name: 'period', type: 'text', label: 'Period', defaultValue: '/Monat' },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          fields: [
            { name: 'feature', type: 'text', required: true, label: 'Feature' },
          ],
        },
        { name: 'highlighted', type: 'checkbox', label: 'Highlighted', defaultValue: false },
        { name: 'ctaLabel', type: 'text', label: 'CTA Label', defaultValue: 'Auswählen' },
        { name: 'ctaLink', type: 'text', label: 'CTA Link', defaultValue: '/kontakt' },
      ],
    },
  ],
}
