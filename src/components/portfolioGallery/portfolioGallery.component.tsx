'use client';
import { useMemo, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { GallerySlider } from '../gallerySlider/gallerySlider.component';
import { ProgressBar } from '../progressBar/progressBar.component';

import { PortfolioGalleryProps } from './portfolioGallery.types';
import { ToggleButtonGroup } from '../toggleButtonGroup/toggleButtonGroup.component';

const ALL_OPTION = 'WSZYSTKIE';

export const PortfolioGallery = (props: PortfolioGalleryProps) => {
  const { images } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [category, setCategory] = useState(ALL_OPTION);
  const options = [ALL_OPTION, ...new Set(images.map((image) => image.label ?? '').filter(Boolean))];

  const filteredImages = useMemo(() => {
    if (category === 'WSZYSTKIE') return images;

    return images.filter((image) => image.label === category);
  }, [category, images]);

  const lightboxSlides = filteredImages.map((image) => ({ src: image.url }));

  return (
    <div className='h-full'>
      {options && options.length >= 2 && (
        <ToggleButtonGroup options={options} onChange={setCategory} value={category} />
      )}
      <div className='mt-6'>
        <GallerySlider
          images={filteredImages}
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
            description={filteredImages[activeIndex]?.caption ?? ''}
            totalAmount={filteredImages.length}
          />
        </div>
      </div>
    </div>
  );
};
