import { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contact',
  labels: { singular: 'Contact', plural: 'Contact' },
  fields: [
    { name: 'heading', type: 'text', required: true, label: 'Heading' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'phone', type: 'text', label: 'Phone' },
    { name: 'address', type: 'textarea', label: 'Address' },
    { name: 'showMap', type: 'checkbox', label: 'Show Map', defaultValue: false },
  ],
}
