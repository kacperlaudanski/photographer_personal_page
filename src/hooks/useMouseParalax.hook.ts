'use client';
import { useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

import { UseMouseParalax } from '@/interfaces';

export const useMouseParalax: (strength?: number) => UseMouseParalax = (strength = 0.5): UseMouseParalax => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 30, damping: 15 });
  const smoothY = useSpring(cursorY, { stiffness: 30, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const positionX = (e.clientX - centerX) / centerX - 0.5;
      const positionY = (e.clientY - centerY) / centerY - 0.5;

      cursorX.set(positionX * -strength);
      cursorY.set(positionY * -strength);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove); 
  }, [cursorX, cursorY, strength]);

  return { x: smoothX, y: smoothY };
};
