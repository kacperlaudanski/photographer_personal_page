'use client';
import { motion,  } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { JSX, useEffect, useState } from 'react';

import { titleVariants } from './pageCurtain.consts';

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
      <div className='absolute inset-[-200%] w-[400%] h-[400%] opacity-[0.18] pointer-events-none' />
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
