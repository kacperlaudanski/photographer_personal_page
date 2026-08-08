import { defineField, defineType } from 'sanity';

export const gallerySchema = defineType({
  name: 'gallery',
  title: 'Galeria (scroll 3D)',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Zdjęcia',
      type: 'array',
      of: [
        {
          type: 'image',
          name: 'galleryImage',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Tekst alternatywny', type: 'string' }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
