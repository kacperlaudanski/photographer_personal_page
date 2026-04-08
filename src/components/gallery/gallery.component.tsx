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
];

export const Gallery: React.FC = (): JSX.Element => {
  const { smoothProgress }: UseAutoScroll = useAutoScroll();

  return (
    <div className='relative w-full overflow-hidden'>
      <div
        className='flex sticky top-0 h-screen w-full'
        style={{ 
          perspective: '1200px', 
          transformStyle: 'preserve-3d'
        }}
      >
        {images.map((src: string, index: number): JSX.Element => (
          <ImageCard
            key={index} 
            src={src}
            index={index}
            scrollProgress={smoothProgress} 
            total={images.length} 
          />
        ))}
      </div>
    </div>
  );
};
