import { motion, useTransform } from 'motion/react';
import Image from 'next/image';

import { useMouseParalax } from '@/hooks';

import { ImageCardProps } from './imageCard.types';

export const ImageCard = (props: ImageCardProps) => {
  const { src, index, scrollProgress, total, baseX = 0, baseY = 0, rotate = 0 } = props;
  const { x, y } = useMouseParalax();
  const z= useTransform(scrollProgress, (value) => {
  const offset = index / total;
  const loop = ((value + offset) % 1 + 1) % 1;

    return -4000 + loop * 5000;
  });
  const opacity = useTransform(z, [-4000, -2000, 200, 600], [0, 1, 1, 0]);

  const offsetX = useTransform(x, (value) => baseX - value * 480);
  const offsetY = useTransform(y, (value) => baseY - value * 480);
  
  return (
    <motion.div
      style={{
        z,
        opacity,
        transformStyle: 'preserve-3d',
        x: offsetX, 
        y: offsetY,
        rotate,
      }}
      className='w-105 h-80 absolute left-1/2 top-1/2'
    >
      <div className='relative w-full h-full group'>
        <Image
          draggable={false}
          src={src}
          className='w-full h-full object-cover shadow-2xl transition-[filter] duration-300'
          alt=''
          width={900}
          height={600}
        />
      </div>
    </motion.div>
  );
};
