import { MotionValue } from 'motion';
import { useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

import { UseMouseParalax } from '@/interfaces';

export const useMouseParalax: (strength?: number) => UseMouseParalax = (strength: number = 0.5): UseMouseParalax => {
  const cursorX: MotionValue<number> = useMotionValue<number>(0);
  const cursorY: MotionValue<number> = useMotionValue<number>(0);
  const smoothX: MotionValue<number> = useSpring(cursorX, { stiffness: 30, damping: 15 });
  const smoothY: MotionValue<number> = useSpring(cursorY, { stiffness: 30, damping: 15 });

  useEffect((): () => void => {
    const handleMouseMove: (e: MouseEvent) => void = (e: MouseEvent): void => {
      const centerX: number = window.innerWidth / 2;
      const centerY: number = window.innerHeight / 2;
      const positionX: number = (e.clientX - centerX) / centerX - 0.5;
      const positionY: number = (e.clientY - centerY) / centerY - 0.5;

      cursorX.set(positionX * -strength);
      cursorY.set(positionY * -strength);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return (): void => window.removeEventListener('mousemove', handleMouseMove); 
  }, [cursorX, cursorY, strength]);

  return { x: smoothX, y: smoothY };
};
