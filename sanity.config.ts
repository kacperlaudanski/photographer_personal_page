import { visionTool } from '@sanity/vision';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { sessionSchema } from '@/sanity';

export default defineConfig({
  name: 'photography-portfolio',
  title: 'Photography Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [sessionSchema],
  },
});
