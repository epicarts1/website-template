import { Block } from 'payload'

export const TeamBlock: Block = {
  slug: 'team',
  labels: { singular: 'Team', plural: 'Team Sections' },
  fields: [
    { name: 'heading', type: 'text', required: true, label: 'Heading', defaultValue: 'Unser Team' },
    { name: 'subheading', type: 'textarea', label: 'Subheading' },
    {
      name: 'members',
      type: 'relationship',
      relationTo: 'team-members',
      hasMany: true,
      label: 'Team Members',
    },
    {
      name: 'showPlaceholders',
      type: 'checkbox',
      label: 'Show placeholders when no members are selected',
      defaultValue: true,
    },
    {
      name: 'placeholderCount',
      type: 'number',
      label: 'Number of placeholders',
      defaultValue: 3,
      min: 1,
      max: 12,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.showPlaceholders),
      },
    },
  ],
}
