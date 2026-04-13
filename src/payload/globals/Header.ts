import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  fields: [
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo' },
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Items',
      fields: [
        { name: 'label', type: 'text', required: true, label: 'Label' },
        { name: 'link', type: 'text', required: true, label: 'Link' },
        {
          name: 'children',
          type: 'array',
          label: 'Dropdown Items',
          fields: [
            { name: 'label', type: 'text', required: true, label: 'Label' },
            { name: 'link', type: 'text', required: true, label: 'Link' },
          ],
        },
      ],
    },
  ],
}
