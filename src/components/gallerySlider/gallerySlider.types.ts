import { Swiper } from 'swiper/types';

import { PortfolioGalleryImage } from '@/interfaces';

export interface GallerySliderProps {
  images: PortfolioGalleryImage[];
  onSlideChange: (swiper: Swiper) => void;
  onImageClick: (index: number) => void;
}
