'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { JSX, useEffect, useState } from 'react';

const noiseImage = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export const DoubleTransitions: React.FC = (): JSX.Element | null => {
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
      className='fixed inset-x-0 top-0 z-[100] h-[115vh] bg-[#1e1e1e] rounded-bl-[50%_120px] rounded-br-[50%_120px] pointer-events-none overflow-hidden'
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
    </motion.div>
  );
};
