export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3 },
    { name: 'url', title: 'Project URL', type: 'url' },
    { name: 'image', title: 'Project image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Display order', type: 'number', validation: (Rule) => Rule.required().integer().min(0) },
    { name: 'published', title: 'Show on website', type: 'boolean', initialValue: true },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
};
