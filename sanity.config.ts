import { visionTool } from '@sanity/vision';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { aboutSchema, gallerySchema, sessionSchema, structure } from '@/sanity';

export default defineConfig({
  name: 'photography-portfolio',
  title: 'Photography Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  basePath: '/studio',
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: [sessionSchema, aboutSchema, gallerySchema],
  },
});
