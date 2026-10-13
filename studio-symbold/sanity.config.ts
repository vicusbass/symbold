import {colorInput} from '@sanity/color-input'
import {dashboardTool} from '@sanity/dashboard'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {vercelWidget} from 'sanity-plugin-dashboard-widget-vercel'
import {muxInput} from 'sanity-plugin-mux-input'

import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'symbold',

  projectId: 'p0rg3cc2',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
    colorInput(),
    muxInput({
      max_resolution_tier: '2160p',
      encoding_tier: 'smart',
    }),
    dashboardTool({
      widgets: [vercelWidget({layout: {width: 'full'}})],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
