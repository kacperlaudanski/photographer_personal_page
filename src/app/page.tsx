import Link from 'next/link';
import React from 'react';

import { client, routes } from '../lib';
import { Gallery } from '@/components';

export default async function Home() {
  const sessions = await client.fetch(`*[_type == 'session']{title, "slug": slug.current}`);

  return (
    <main className='relative h-screen w-full'>
      <Gallery />
    </main>
  );
}
