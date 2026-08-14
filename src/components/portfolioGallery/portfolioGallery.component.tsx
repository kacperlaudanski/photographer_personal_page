'use client';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { GallerySlider } from '../gallerySlider/gallerySlider.component';
import { ProgressBar } from '../progressBar/progressBar.component';

import { PortfolioGalleryProps } from './portfolioGallery.types';

export const PortfolioGallery = (props: PortfolioGalleryProps) => {
  const { images } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxSlides = images.map((image) => ({ src: image.url }));

  return (
    <div className='h-full'>
      <GallerySlider
        images={images}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onImageClick={(index) => setLightboxIndex(index)}
      />
      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        index={lightboxIndex ?? 0}
        slides={lightboxSlides}
        plugins={[Thumbnails]}
      />
      <div>
        <ProgressBar
          activeIndex={activeIndex}
          description={images[activeIndex].caption ?? ''}
          totalAmount={images.length}
        />
      </div>
    </div>
  );
};
