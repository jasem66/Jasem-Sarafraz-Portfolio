export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      type: 'Company',
      type: 'string',
    },
    {
      name: 'imageurl',
      type: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      type: 'Feedback',
      type: 'string',
    },
  ],
}