'use client';
import { useAutoScroll } from '@/hooks';

import { ImageCard } from '../imageCard/imageCard.component';

import { GalleryProps } from './gallery.types';
import { seededValue } from './gallery.utils';

export const Gallery = (props: GalleryProps) => {
  const { images } = props;
  const { smoothProgress } = useAutoScroll();

  return (
    <div className='relative w-full overflow-hidden'>
      <div
        className='sticky top-0 h-screen w-full'
        style={{ 
          perspective: '1200px', 
          transformStyle: 'preserve-3d'
        }}
      >
        {images.map((imageData, index) => {
          const baseX = (seededValue(index, 1) - 0.5) * 700;
          const baseY = (seededValue(index, 2) - 0.5) * 400;
          const rotate = (seededValue(index, 3) - 0.5) * 24;  

          return (
            <ImageCard
              key={index}
              src={imageData.src}
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
