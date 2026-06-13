import { defineType, defineField } from 'sanity';

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
    defineField({ name: 'description', title: 'Opis', type: 'text' }),
    defineField({
      name: 'images',
      title: 'Galeria',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
      }],
    }),
    defineField({
      name: 'tags',
      title: 'Tagi',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});

