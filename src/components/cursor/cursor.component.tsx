'use client';
import { useCursor } from '@/hooks';

export const Cursor = () => {
  const { dotRef, ringRef } = useCursor();

  return (
    <>
      <div
        ref={dotRef}
        className='fixed pointer-events-none z-9999 will-change-transform rounded-full bg-focus hidden md:block'
        style={{ width: 6, height: 6, top: -3, left: -3 }}
      />
      <div
        ref={ringRef}
        className='fixed pointer-events-none z-9999 will-change-transform rounded-full border border-focus hidden md:block'
        style={{ width: 36, height: 36, top: -18, left: -18 }}
      />
    </>
  );
};
