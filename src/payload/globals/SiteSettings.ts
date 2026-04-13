import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  fields: [
    { name: 'siteName', type: 'text', required: true, label: 'Site Name', defaultValue: 'Epic Arts' },
    { name: 'tagline', type: 'text', label: 'Tagline' },
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo' },
    { name: 'favicon', type: 'upload', relationTo: 'media', label: 'Favicon' },
    {
      name: 'colors',
      type: 'group',
      label: 'Brand Colors',
      fields: [
        { name: 'primary', type: 'text', label: 'Primary Color', defaultValue: '#fc40af' },
        { name: 'secondary', type: 'text', label: 'Secondary Color', defaultValue: '#a6bef4' },
        { name: 'accent', type: 'text', label: 'Accent Color', defaultValue: '#ff2d2a' },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact Info',
      fields: [
        { name: 'email', type: 'email', label: 'Email' },
        { name: 'phone', type: 'text', label: 'Phone' },
        { name: 'address', type: 'textarea', label: 'Address' },
      ],
    },
    {
      name: 'analytics',
      type: 'group',
      label: 'Analytics',
      fields: [
        { name: 'gaId', type: 'text', label: 'Google Analytics ID' },
        { name: 'fbPixelId', type: 'text', label: 'Facebook Pixel ID' },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'Default SEO',
      fields: [
        { name: 'defaultTitle', type: 'text', label: 'Default Title' },
        { name: 'defaultDescription', type: 'textarea', label: 'Default Description' },
        { name: 'defaultImage', type: 'upload', relationTo: 'media', label: 'Default OG Image' },
      ],
    },
  ],
}
