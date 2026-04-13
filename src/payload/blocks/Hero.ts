import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    { name: 'headline', type: 'text', required: true, label: 'Headline' },
    { name: 'subheadline', type: 'textarea', label: 'Subheadline' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Hintergrundbild' },
    {
      name: 'cta', type: 'group', label: 'Call to Action',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Jetzt starten' },
        { name: 'link', type: 'text', defaultValue: '/kontakt' },
      ],
    },
    {
      name: 'style', type: 'select', defaultValue: 'gradient',
      options: [
        { label: 'Gradient (Brand)', value: 'gradient' },
        { label: 'Bild Fullscreen', value: 'image' },
        { label: 'Minimal (Weiß)', value: 'minimal' },
        { label: 'Dunkel', value: 'dark' },
      ],
    },
  ],
}
