'use client';
import { useSyncExternalStore } from 'react';

const subscribe = (onChange: () => void) => {
  const mediaQuery = window.matchMedia('(pointer: fine)');
  mediaQuery.addEventListener('change', onChange);

  return () => mediaQuery.removeEventListener('change', onChange);
};

const getSnapshot = () => window.matchMedia('(pointer: fine)').matches;

const getServerSnapshot = () => false;

export const useHasFinePointer = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
