'use client';
import { motion,  } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { JSX, useEffect, useState } from 'react';

import { getPageTitle } from '@/utils';

import { titleVariants } from './pageCurtain.consts';

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
      className='fixed inset-x-0 top-0 z-100 h-[115vh] bg-[#1e1e1e] rounded-bl-[50%_120px] rounded-br-[50%_120px] pointer-events-none overflow-hidden flex items-center justify-center'
      initial={{ y: '-115%' }}
      animate={{ y: ['-115%', '0%', '0%', '-115%'] }}
      transition={{
        duration: 3,
        times: [0, 0.32, 0.68, 1],
        ease: [0.76, 0, 0.24, 1],
      }}
    >
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
