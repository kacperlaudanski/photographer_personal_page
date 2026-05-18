'use client';
import { Coordinates } from '@/interfaces';
import { RefObject, useEffect, useRef } from 'react';

export const useCursor = (lerp: number = 0.17) => {
  const dotRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const ringRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const rafRef: RefObject<number> = useRef<number>(0);
  const initializedRef: RefObject<boolean> = useRef<boolean>(false);

  useEffect(() => {
    const mouseCoords: Coordinates = { x: 0, y: 0 };
    const ringCoords: Coordinates = { x: 0, y: 0 };

    const onMove: (event: MouseEvent) => void = (event: MouseEvent): void => {
      mouseCoords.x = event.clientX;
      mouseCoords.y = event.clientY;

      if (!initializedRef.current) {
        ringCoords.x = mouseCoords.x;
        ringCoords.y = mouseCoords.y;
        initializedRef.current = true;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseCoords.x}px, ${mouseCoords.y}px)`;
      }
    };

    const animate: () => void = (): void => {
      if (initializedRef.current) {
        ringCoords.x += (mouseCoords.x - ringCoords.x) * lerp;
        ringCoords.y += (mouseCoords.y - ringCoords.y) * lerp;
      
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${ringCoords.x}px, ${ringCoords.y}px)`;
        }
      }
      
      rafRef.current = requestAnimationFrame(animate);
    }
    
    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return (): void => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    } 
  }, [lerp]);

  return { dotRef, ringRef };
};
