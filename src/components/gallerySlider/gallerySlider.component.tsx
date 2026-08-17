'use client';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { GallerySliderProps } from './gallerySlider.types';
import { useState } from 'react';

export const GallerySlider = (props: GallerySliderProps) => {
  const { images, onSlideChange, onImageClick }: GallerySliderProps = props;
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className='px-10 h-full relative'>
      <Swiper
        effect='coverflow'
        grabCursor
        centeredSlides
        slidesPerView='auto'
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={onSlideChange}
        onSwiper={setSwiperInstance}
        spaceBetween={180}
        modules={[EffectCoverflow, Navigation, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ width: 320, height: 400 }}>
            <div className='gallery-slide-inner relative w-full h-full' onClick={() => onImageClick(index)}>
              {image.url && (
                <Image
                  alt='Zdjęcie ślubne'
                  src={image.url}
                  fill
                  className='object-cover rounded-lg select-none'
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className='absolute left-2 top-1/2 z-10 h-10 w-10 place-items-center rounded-full bg-surface-raised shadow-md transition hover:scale-105'
        onClick={() => swiperInstance?.slidePrev()}
      >
        <BsChevronLeft className='h-5 w-5 text-accent' />
      </button>
      <button
        className='absolute right-2 top-1/2 z-10 h-10 w-10 place-items-center rounded-full bg-surface-raised shadow-md transition hover:scale-105'
        onClick={() => swiperInstance?.slideNext()}
      >
        <BsChevronRight className='h-5 w-5 text-accent' />
      </button>
    </div>
  );
};
