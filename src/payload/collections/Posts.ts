import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt', 'updatedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Title' },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: { position: 'sidebar' },
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
    { name: 'excerpt', type: 'textarea', label: 'Excerpt' },
    { name: 'content', type: 'richText', required: true, label: 'Content' },
    { name: 'featuredImage', type: 'upload', relationTo: 'media', label: 'Featured Image' },
    { name: 'author', type: 'text', label: 'Author' },
    {
      name: 'categories',
      type: 'array',
      label: 'Categories',
      fields: [
        { name: 'category', type: 'text', required: true, label: 'Category' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published At',
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } },
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
