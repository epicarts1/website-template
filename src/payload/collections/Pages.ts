import { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Features } from '../blocks/Features'
import { CTA } from '../blocks/CTA'
import { TestimonialsBlock } from '../blocks/TestimonialsBlock'
import { FAQ } from '../blocks/FAQ'
import { Pricing } from '../blocks/Pricing'
import { Gallery } from '../blocks/Gallery'
import { ContactBlock } from '../blocks/ContactBlock'
import { RichTextBlock } from '../blocks/RichTextBlock'
import { TeamBlock } from '../blocks/TeamBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'updatedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Title' },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO Meta',
      fields: [
        { name: 'title', type: 'text', label: 'Meta Title' },
        { name: 'description', type: 'textarea', label: 'Meta Description' },
        { name: 'image', type: 'upload', relationTo: 'media', label: 'OG Image' },
      ],
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Layout',
      blocks: [Hero, Features, CTA, TestimonialsBlock, FAQ, Pricing, Gallery, TeamBlock, ContactBlock, RichTextBlock],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
}
