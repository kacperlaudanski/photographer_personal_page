import { defineField, defineType } from 'sanity';

export const aboutSchema = defineType({
  name: 'about',
  title: 'O mnie',
  type: 'document',
  fields: [
    defineField({
      name: 'timeline',
      title: 'Oś czasu',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'timelineEntry',
          fields: [
            defineField({ name: 'year', type: 'number' }),
            defineField({ name: 'header', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
          ],
        }
      ],
    }),
    defineField({
      name: 'sessionTypes',
      title: 'Rodzaje sesji',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'sessionType',
          fields: [
            defineField({ name: 'label', title: 'Nazwa', type: 'string' }),
            defineField({
              name: 'iconName',
              title: 'Ikona',
              type: 'string',
              options: {
                list: [
                  { title: 'Aparat (portrety)', value: 'camera' },
                  { title: 'Film (plenery)', value: 'film' },
                  { title: 'Obrączka (śluby)', value: 'ring' },
                  { title: 'Dziecko (komunie)', value: 'child' },
                  { title: 'Tort (jubileusze)', value: 'cake' },
                  { title: 'Niemowlę (chrzciny)', value: 'baby' },
                ],
              },
            }),
          ]
        }
      ],
    }),
  ],
});
