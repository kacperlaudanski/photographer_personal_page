'use client';
import { motion } from 'framer-motion';
import React, { JSX, useEffect, useState } from 'react';

import { SessionStorageKey } from '@/enums';
import Image from 'next/image';

/* todo: przekminić co z tym zrobić */

interface IntroImage {
  image: string;
  delay: number;
}

const images = [
  {
    image: '/mockImages/img1.jpg',
    delay: 0,
  },
  {
    image: '/mockImages/img2.jpg',
    delay: 900,
  },
  {
    image: '/mockImages/img3.jpg',
    delay: 1800,
  },
];

export const IntroOverlay: React.FC = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);


  useEffect((): (() => void) | undefined => {
    const hasSeenIntro: string | null = sessionStorage.getItem(SessionStorageKey.IntroSeen);

    if (!hasSeenIntro) {
      // setIsVisible(true);
      document.body.style.overflow = 'hidden';

      if (currentIndex < images.length) {
        const timer = setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
        }, images[currentIndex].delay || 900);
        return () => {
          clearTimeout(timer);
          document.body.style.overflow = '';
        };
      } else {
        // setIsVisible(false);
        document.body.style.overflow = '';
      }
    }
  }, [isVisible, setIsVisible, currentIndex]);

  return (
    <>
      {!!isVisible && images[currentIndex] && (
        <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">
          <motion.div
            initial={{ y: '-120vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: images[currentIndex].delay / 1000 }}
            className="absolute inset-0"
          >
            <Image
              alt={`Intro ${currentIndex}`}
              fill
              priority
              src={images[currentIndex].image}
              className="object-cover"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};
