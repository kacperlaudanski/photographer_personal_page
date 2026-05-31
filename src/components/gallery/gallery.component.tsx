'use client';
import React, { JSX } from 'react';

import { useAutoScroll } from '@/hooks';
import { UseAutoScroll } from '@/interfaces';

import { ImageCard } from '../imageCard/imageCard.component';

const images: string[] = [
  '/mockImages/img1.jpg',
  '/mockImages/img2.jpg',
  '/mockImages/img3.jpg',
  '/mockImages/img4.jpg',
  '/mockImages/img5.jpg',
  '/mockImages/img6.jpg',
  '/mockImages/img1.jpg',
  '/mockImages/img2.jpg',
  '/mockImages/img3.jpg',
  '/mockImages/img4.jpg',
  '/mockImages/img5.jpg',
  '/mockImages/img6.jpg',
  '/mockImages/img1.jpg',
  '/mockImages/img2.jpg',
  '/mockImages/img3.jpg',
  '/mockImages/img4.jpg',
  '/mockImages/img5.jpg',
  '/mockImages/img6.jpg',
  '/mockImages/img1.jpg',
  '/mockImages/img2.jpg',
  '/mockImages/img3.jpg',
  '/mockImages/img4.jpg',
  '/mockImages/img5.jpg',
  '/mockImages/img6.jpg',
];

function seededValue(index: number, offset: number): number {
  return Math.sin(index * 9301 + offset * 49297) * 0.5 + 0.5;
}

export const Gallery: React.FC = (): JSX.Element => {
  const { smoothProgress }: UseAutoScroll = useAutoScroll();

  return (
    <div className='relative w-full overflow-hidden'>
      <div
        className='sticky top-0 h-screen w-full'
        style={{ 
          perspective: '1200px', 
          transformStyle: 'preserve-3d'
        }}
      >
        {images.map((src, index) => {
          const baseX = (seededValue(index, 1) - 0.5) * 700;
          const baseY = (seededValue(index, 2) - 0.5) * 400;
          const rotate = (seededValue(index, 3) - 0.5) * 24;  

          return (
            <ImageCard
              key={index}
              src={src}
              index={index}
              scrollProgress={smoothProgress}
              total={images.length}
              baseX={baseX}
              baseY={baseY}
              rotate={rotate}
            />
          );
        })}
      </div>
    </div>
  );
};
