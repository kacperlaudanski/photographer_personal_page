import React from 'react';

import { client } from '../lib';
import { Gallery } from '@/components';

import styles from './page.module.css';

export default async function Home() {
  const sessions = await client.fetch(`*[_type == 'session']{title, "slug": slug.current}`);

  return (
    <main className='relative h-screen w-full'
      style={{
        backgroundColor: '#1a1a1a',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)
        `,
        backgroundSize: '6px 6px',
        backgroundPosition: '-1px -1px, -1px -1px, 0 0, 0 0',
      }}
    >
      <div className='absolute inset-0 z-20 pointer-events-none bg-black/60' />
      <div className='absolute inset-0 z-30 flex flex-col gap-3 items-center justify-center text-center pointer-events-none p-6'>
        <div className='flex items-center gap-3 mb-4'>
          <span className='w-6 h-px bg-white/40' />
          <span className='text-[11px] tracking-[0.25em] text-white/50 uppercase font-family-jet-brains'>Portfolio · 2026</span>
          <span className='w-6 h-px bg-white/40' />
        </div>
        <h1 className='text-[clamp(4rem,10vw,5rem)] md:text-[clamp(4rem,10vw,8rem)] font-serif font-normal leading-none text-white tracking-tight flex flex-col'>
          Aleksandra
          <span className={styles.name}>
            Robak
          </span>
        </h1>
        <p className='mt-8 text-white/60 italic font-serif max-w-lg leading-relaxed'>
          Każde zdjęcie to okno — nie chcę pokazywać widoku, chcę<br />
          pokazać kogoś, kto przez nie patrzy.
        </p>
      </div>
      <Gallery />
      <div className='text-sm absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center md:justify-between px-8 py-5 tracking-[0.2em] text-white/30 uppercase font-family-jet-brains text-center'>
        <span className='md:flex hidden'>Poznań · 52.24°N 16.93°E</span>
        <span className='flex items-center gap-3'>
          <span className='w-8 bg-white/30' />
            Scroll, żeby przyspieszyć
          <span className='w-8 bg-white/30' />
        </span>
        <span className='md:flex hidden'>240 sesji · 60 ślubów · od 2017</span>
      </div>
    </main>
  );
}
