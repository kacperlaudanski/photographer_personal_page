import { motion, MotionValue, useTransform } from 'motion/react';
import React from 'react';
import { ImageCardProps } from './imageCard.types';
import Image from 'next/image';

import { useMouseParalax } from '@/hooks';
import { UseMouseParalax } from '@/interfaces';

export const ImageCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {
  const { src, index, scrollProgress, total }: ImageCardProps = props;
  const { x, y }: UseMouseParalax = useMouseParalax();
  const z: MotionValue<number> = useTransform(scrollProgress, (value: number): number => {
    const offset: number = index / total;
    const loop: number = ((value + offset) % 1 + 1) % 1;

    return -4000 + loop * 5000;
  });
  const opacity: MotionValue<number> = useTransform(z, [-4000, -3000, 500, 1000], [0, 1, 1, 0]);
  const baseX: number = index % 2 === 0 ? -420 : 420;
  const baseY: number = (index % 3) * 260 - 260;

  const offsetX: MotionValue<number> = useTransform(x, (value: number): number => baseX - value * 480);
  const offsetY: MotionValue<number> = useTransform(y, (value: number): number => baseY - value * 480);
  
  return (
    <motion.div
      style={{
        z,
        opacity,
        transformStyle: 'preserve-3d',
        x: offsetX, 
        y: offsetY,
      }}
      className='w-[800px] h-[600px] absolute left-1/2 top-1/2'
    >
      <div className='relative w-full h-full group'>
        <div className='pointer-events-none absolute inset-0 bg-[url(/assets/cameraFrame.png)] bg-no-repeat bg-contain bg-center opacity-0 group-hover:opacity-100 transition-opacity' />
        <Image
          src={src}
          className='w-full h-full object-cover shadow-2xl transition-[filter] duration-300 group-hover:[animation:hover-blur_1s_ease]'
          alt=''
          width={900}
          height={600}
        />
      </div>
    </motion.div>
  );
};
