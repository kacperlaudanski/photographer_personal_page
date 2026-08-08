import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .id('about')
        .title('O mnie')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .id('gallery')
        .title('Galeria')
        .child(
          S.document()
            .schemaType('gallery')
            .documentId('gallery')
        ),
      ...S.documentTypeListItems().filter(
        (item) => !['about', 'gallery'].includes(item.getId() ?? '')
      ),
    ]);