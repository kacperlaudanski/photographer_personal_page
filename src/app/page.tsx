import Link from 'next/link';
import React from 'react';

import { client, routes } from '../lib';
import { Gallery } from '@/components';

/* eslint-disable */

export default async function Home() {
  const sessions = await client.fetch(`*[_type == 'session']{title, "slug": slug.current}`);

  return (
    <main className='relative h-screen w-full'>
      <Gallery />
    </main>
  );
}

      {/* <h1 className='text-4xl font-bold mb-10'>Moje Sesje:</h1>
      <ul className='flex flex-col gap-8'>
        {sessions.map((session: any) => (
          <li className='flex flex-col gap-2' key={session.title}>
            <div key={session.title} className='text-xl'>
              {session.title}
            </div>
            <Link href={routes.session(session.slug)}>
              Zobacz projekt
            </Link>
          </li>
        ))}
      </ul> */}