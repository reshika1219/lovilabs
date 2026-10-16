export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'role', title: 'Role', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'initials', title: 'Initials', type: 'string', validation: (Rule) => Rule.max(3) },
    { name: 'image', title: 'Profile image', type: 'image', options: { hotspot: true } },
    { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
    { name: 'order', title: 'Display order', type: 'number', validation: (Rule) => Rule.required().integer().min(0) },
    { name: 'active', title: 'Show on website', type: 'boolean', initialValue: true },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
};
