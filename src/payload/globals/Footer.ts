import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  fields: [
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright',
      defaultValue: `\u00a9 ${new Date().getFullYear()} Epic Arts`,
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Columns',
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Column Title' },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          fields: [
            { name: 'label', type: 'text', required: true, label: 'Label' },
            { name: 'link', type: 'text', required: true, label: 'Link' },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'Instagram', value: 'instagram' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'TikTok', value: 'tiktok' },
            { label: 'YouTube', value: 'youtube' },
          ],
        },
        { name: 'url', type: 'text', required: true, label: 'URL' },
      ],
    },
  ],
}
