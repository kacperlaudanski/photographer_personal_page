import React from 'react';

import { Gallery } from '@/components';
import { gridBackground } from '@/consts';
import { GalleryImage } from '@/interfaces';
import { GalleryQueryResult, getGallery, urlFor } from '@/sanity';

export default async function Home() {
  const galleryData: GalleryQueryResult = await getGallery();

  const galleryImages: GalleryImage[] = (galleryData?.images ?? []).map((img) => ({
    key: img._key,
    src: urlFor(img)?.url() ?? '',
    alt: img.alt ?? '',
  }));

  return (
    <main className='relative h-screen w-full' style={gridBackground}>
      <div className='absolute inset-0 z-20 pointer-events-none bg-overlay-scrim' />
      <div className='absolute inset-0 z-30 flex flex-col gap-3 items-center justify-center text-center pointer-events-none p-6'>
        <div className='flex items-center gap-3 mb-4'>
          <span className='w-6 h-px bg-on-media-subtle' />
          <span className='text-[11px] tracking-[0.25em] text-on-media-subtle uppercase font-mono'>
            Portfolio · 2026
          </span>
          <span className='w-6 h-px bg-on-media-subtle' />
        </div>
        <h1 className='text-[clamp(4rem,10vw,5rem)] md:text-[clamp(4rem,10vw,8rem)] font-display font-normal leading-none text-on-accent tracking-tight flex flex-col'>
          Aleksandra
          <span className='text-gradient-brand font-handwrite text-[8rem]'>
            Robak
          </span>
        </h1>
        <p className='mt-8 text-on-media-muted italic font-display max-w-lg leading-relaxed'>
          Każde zdjęcie to okno — nie chcę pokazywać widoku, chcę<br />
          pokazać kogoś, kto przez nie patrzy.
        </p>
      </div>
      <Gallery images={galleryImages} />
      <div className='text-sm absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center md:justify-between px-8 py-5 tracking-[0.2em] text-on-media-faint uppercase font-mono text-center'>
        <span className='md:flex hidden'>Poznań · 52.24°N 16.93°E</span>
        <span className='flex items-center gap-3'>
          <span className='w-8 bg-on-media-faint' />
            Scroll, żeby
            <span className='inline-block animate-bounce'>przyspieszyć</span>
          <span className='w-8 bg-on-media-faint' />
        </span>
        <span className='md:flex hidden'>240 sesji · 60 ślubów · od 2017</span>
      </div>
    </main>
  );
};
