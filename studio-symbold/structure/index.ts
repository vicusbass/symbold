import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Pages group
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Main Page')
                .child(S.document().schemaType('mainPage').documentId('mainPage')),
              // Add more page types here as they are created
            ])
        ),
      // Divider
      S.divider(),
      // Other document types
      S.documentTypeListItem('tag').title('Tags'),
      // Divider
      S.divider(),
      // All other types that aren't explicitly listed
      ...S.documentTypeListItems().filter(
        (listItem) => !['mainPage', 'tag'].includes(listItem.getId() || '')
      ),
    ])
