import { defineType, defineField, defineArrayMember } from 'sanity';

export const sessionSchema = defineType({
  name: 'session',
  title: 'Sesja fotograficzna',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
    defineField({ name: 'sessionsAmount', title: 'Liczba realizacji', type: 'number' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'date', title: 'Data sesji', type: 'date' }),
    defineField({ name: 'location', title: 'Lokalizacja', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Portret', value: 'portrait' },
          { title: 'Podróze', value: 'travels' },
          { title: 'Przyroda', value: 'nature' },
          { title: 'Reportaz', value: 'reportage' },
          { title: 'Inna', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Zdjęcie główne',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'secondaryImage',
      title: 'Zdjęcie dodatkowe 1 (podgląd na liście)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tertiaryImage',
      title: 'Zdjęcie dodatkowe 2 (podgląd na liście)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'description', title: 'Opis', type: 'text' }),
    defineField({
      name: 'images',
      title: 'Galeria',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'galleryImage',
          title: 'Zdjęcie',
          fields: [
            defineField({
              name: 'image',
              title: 'Zdjęcie',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Podpis (np. Zabawa do świtu)',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Etykieta (do filtrowania)',
              type: 'string',
            }),
          ],
          preview: {
            select: { media: 'image', title: 'caption', subtitle: 'label' },
          },
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tagi',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});

