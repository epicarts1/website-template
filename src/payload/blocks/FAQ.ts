import { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  fields: [
    { name: 'heading', type: 'text', required: true, label: 'Heading' },
    {
      name: 'items',
      type: 'array',
      label: 'FAQ Items',
      minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true, label: 'Question' },
        { name: 'answer', type: 'textarea', required: true, label: 'Answer' },
      ],
    },
  ],
}
