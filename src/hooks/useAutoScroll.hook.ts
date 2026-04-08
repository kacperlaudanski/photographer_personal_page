import { MotionValue } from 'motion';
import { useMotionValue, useSpring } from 'motion/react';
import { RefObject, useCallback, useEffect, useRef } from 'react';

import { UseAutoScroll, UseAutoScrollSettings } from '@/interfaces';

export const useAutoScroll: (settings?: UseAutoScrollSettings) => UseAutoScroll = (settings: UseAutoScrollSettings = {}): UseAutoScroll => {
  const { autoSpeed = 0.0005, pauseDuration = 500, wheelSensitivity = 0.0005 }: UseAutoScrollSettings = settings;
  const progress: MotionValue<number> = useMotionValue<number>(0);
  const smoothProgress: MotionValue<number> = useSpring(progress, { stiffness: 1000, damping: 100, mass: 1 });
  const previousTimestamp: RefObject<number | null> = useRef(null);
  const isAutoScrollingRef: RefObject<boolean> = useRef(true);
  const autoTimeoutRef: RefObject<NodeJS.Timeout | null> = useRef<NodeJS.Timeout | null>(null);

  const handleWheel: (e: WheelEvent) => void = useCallback((e: WheelEvent): void => {
    isAutoScrollingRef.current = false;
    previousTimestamp.current = null
    progress.set(progress.get() + e.deltaY * wheelSensitivity);
  
    if (autoTimeoutRef.current) {
      clearTimeout(autoTimeoutRef.current);
    }
    autoTimeoutRef.current = setTimeout((): void => {
      isAutoScrollingRef.current = true;
    }, pauseDuration);
  }, [progress, wheelSensitivity, pauseDuration]);

  useEffect((): () => void => {
    const onVisibilityChange: () => void = (): void => {
      previousTimestamp.current = null;
      isAutoScrollingRef.current = !document.hidden;
    };

    const updateScroll: (currentTimestamp: number) => void = (currentTimestamp: number): void => {
      if (previousTimestamp.current === null) {
        previousTimestamp.current = currentTimestamp;
      }

      const deltaTime: number = currentTimestamp - previousTimestamp.current;
      previousTimestamp.current = currentTimestamp;

      if (isAutoScrollingRef.current) {
        const animStep: number = autoSpeed * (deltaTime / 16.67);
        progress.set(progress.get() + animStep);
      }
      requestAnimationFrame(updateScroll);
    }

    window.addEventListener('wheel', handleWheel, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    const animFrame: number = requestAnimationFrame(updateScroll);

    return (): void => {
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      cancelAnimationFrame(animFrame);
      if (autoTimeoutRef.current) {
        clearTimeout(autoTimeoutRef.current);
      }
    };
  }, [progress, handleWheel, autoSpeed]);
  
  return { smoothProgress };
};
