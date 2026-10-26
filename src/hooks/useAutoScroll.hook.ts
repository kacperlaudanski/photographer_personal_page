'use client';
import { useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

import { UseAutoScroll, UseAutoScrollSettings } from '@/interfaces';

export const useAutoScroll: (settings?: UseAutoScrollSettings) => UseAutoScroll = (settings: UseAutoScrollSettings = {}): UseAutoScroll => {
  const { autoSpeed = 0.002, pauseDuration = 500, wheelSensitivity = 0.0005 }: UseAutoScrollSettings = settings;
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 1000, damping: 100, mass: 1 });
  const previousTimestamp = useRef<number | null>(null);
  const isAutoScrollingRef = useRef(true);
  const autoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef(0);

  const handleWheel = useCallback((e: WheelEvent) => {
    isAutoScrollingRef.current = false;
    previousTimestamp.current = null
    progress.set(progress.get() + e.deltaY * wheelSensitivity);
  
    if (autoTimeoutRef.current) {
      clearTimeout(autoTimeoutRef.current);
    }
    autoTimeoutRef.current = setTimeout(
      () => {
        isAutoScrollingRef.current = true;
      },
      pauseDuration
    );
  }, [progress, wheelSensitivity, pauseDuration]);

  useEffect(() => {
    const onVisibilityChange = () => {
      previousTimestamp.current = null;
      isAutoScrollingRef.current = !document.hidden;
    };

    const updateScroll = (currentTimestamp: number) => {
      if (previousTimestamp.current === null) {
        previousTimestamp.current = currentTimestamp;
      }

      const deltaTime = currentTimestamp - previousTimestamp.current;
      previousTimestamp.current = currentTimestamp;

      if (isAutoScrollingRef.current) {
        const animStep = autoSpeed * (deltaTime / 16.67);
        progress.set(progress.get() + animStep);
      }

      rafRef.current = requestAnimationFrame(updateScroll);
    }

    window.addEventListener('wheel', handleWheel, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    rafRef.current = requestAnimationFrame(updateScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      cancelAnimationFrame(rafRef.current);
      if (autoTimeoutRef.current) {
        clearTimeout(autoTimeoutRef.current);
      }
    };
  }, [progress, handleWheel, autoSpeed]);

  return { smoothProgress };
};
