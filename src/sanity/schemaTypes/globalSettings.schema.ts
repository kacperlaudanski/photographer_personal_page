import { defineField, defineType } from 'sanity';

export const siteSettingsSchema = defineType({
  name: 'globalSettings',
  title: 'Ustawienia strony',
  type: 'document',
  fields: [
    defineField({
      name: 'stats',
      title: 'Statystyki',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'statEntry',
          fields: [
            defineField({ name: 'sessionCount', title: 'Liczba', type: 'number' }),
            defineField({ name: 'text', title: 'Opis', type: 'string' }),
            defineField({
              name: 'iconName',
              type: 'string',
              options: {
                list: ['camera', 'film', 'world'],
              },
            }),
          ],
        },
      ],
    }),
  ],
});
