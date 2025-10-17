import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {muxInput} from 'sanity-plugin-mux-input'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'symbold',

  projectId: 'p0rg3cc2',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), colorInput(), muxInput()],

  schema: {
    types: schemaTypes,
  },
})
