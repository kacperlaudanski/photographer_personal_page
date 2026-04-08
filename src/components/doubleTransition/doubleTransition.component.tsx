'use client';
import { motion, Variants } from 'framer-motion';
import React, { JSX } from 'react'

import { DoubleTransitionProps } from './doubleTransition.types';

const noiseImage = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

const textVariants: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: [0, 1, 1, 0],
    x: [50, 0, 0, -50],
    scale: [0.8, 1, 1, 1.2],
    transition: {
      duration: 2.5,
      times: [0, 0.1, 0.9, 1],
      ease: 'linear',
    }
  }
}

export const DoubleTransition: React.FC<DoubleTransitionProps> = (props: DoubleTransitionProps): JSX.Element  => {
  const { children, title }: DoubleTransitionProps = props;

  return (
    <div className='relative overflow-hidden'>
      <motion.div
        animate='animate'
        className='fixed inset-0 z-50 flex items-center justify-center bg-emerald-500 overflow-hidden'
        initial='initial'
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        variants={{
          initial: { x: '100%' },
          animate: { x: '-100%' },
        }}
      >
        <div 
          style={{ backgroundImage: noiseImage }}
          className='absolute inset-[-200%] w-[400%] h-[400%] opacity-[0.08] pointer-events-none animate-noise'
        />
      </motion.div>
      <motion.div
        animate='animate'
        className='fixed inset-0 z-55 flex items-center justify-center bg-violet-500 overflow-hidden'
        initial='initial'
        transition={{ duration: 2.5, ease: 'easeInOut', times: [0, 0.3, 0.8, 1], delay: 0.4 }}
        variants={{
          initial: { x: '100%' },
          animate: { x: ['100%', '0%', '0%', '-100%'] }
        }}
      >
        <div 
          style={{ backgroundImage: noiseImage }}
          className="absolute inset-[-200%] w-[400%] h-[400%] opacity-[0.08] pointer-events-none animate-noise will-change-transform" 
        />
        <motion.h1 className='text-white text-7xl font-black italic' variants={textVariants}>
          {title}
        </motion.h1>
      </motion.div>
      <motion.div
        animate='animate'
        className='fixed inset-0 z-50 bg-zinc-500'
        initial='initial'
        transition={{ delay: 2.2, ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
        variants={{
          initial: { x: '100%' },
          animate: { x: '-100%' },
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
