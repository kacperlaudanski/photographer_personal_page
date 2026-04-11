'use client';

import { motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { JSX, useEffect, useState } from 'react';

const noiseImage = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Portfolio',
  '/about': 'O mnie',
  '/contact': 'Kontakt',
};

const getPageTitle = (pathname: string): string => {
  if (pathname in ROUTE_TITLES) {
    return ROUTE_TITLES[pathname];
  }

  if (pathname.startsWith('/sessions/')) {
    const slug: string = pathname.replace('/sessions/', '');
    return slug
      .split('-')
      .map((word: string): string => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return '';
};

const titleVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: [0, 1, 1, 0],
    y: [24, 0, 0, -24],
    transition: {
      duration: 1.8,
      times: [0.28, 0.42, 0.58, 0.72],
      ease: 'easeInOut',
    },
  },
};

export const PageCurtain: React.FC = (): JSX.Element | null => {
  const pathname: string = usePathname();
  const [animKey, setAnimKey] = useState<number | null>(null);

  useEffect((): void => {
    setAnimKey((prev: number | null): number => prev === null ? 1 : prev + 1);
  }, [pathname]);

  if (animKey === null) {
    return null;
  }

  return (
    <motion.div
      key={animKey}
      className='fixed inset-x-0 top-0 z-[100] h-[115vh] bg-[#1e1e1e] rounded-bl-[50%_120px] rounded-br-[50%_120px] pointer-events-none overflow-hidden flex items-center justify-center'
      initial={{ y: '-115%' }}
      animate={{ y: ['-115%', '0%', '0%', '-115%'] }}
      transition={{
        duration: 1.8,
        times: [0, 0.38, 0.62, 1],
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div
        style={{ backgroundImage: noiseImage }}
        className='absolute inset-[-200%] w-[400%] h-[400%] opacity-[0.18] pointer-events-none'
      />
      <motion.h1
        className='relative z-10 text-white text-7xl font-black italic font-serif'
        variants={titleVariants}
        initial='initial'
        animate='animate'
      >
        {getPageTitle(pathname)}
      </motion.h1>
    </motion.div>
  );
};
