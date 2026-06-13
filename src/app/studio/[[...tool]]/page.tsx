'use client';
import { NextStudio } from 'next-sanity/studio';

import sanityConfig from '../../../../sanity.config';

const StudioPage = () => (
  <div className='relative z-100'>
    <NextStudio config={sanityConfig} />
  </div>
);

export default StudioPage;
