'use client';
import { JSX } from 'react';

import { useCursor } from '@/hooks';
import { UseCursor } from '@/interfaces';

export const Cursor: React.FC = (): JSX.Element => {
  const { dotRef, ringRef }: UseCursor = useCursor();

  return (
    <>
      <div
        ref={dotRef}
        className='fixed pointer-events-none z-9999 will-change-transform rounded-full bg-[#e040fb] hidden md:block'
        style={{ width: 6, height: 6, top: -3, left: -3 }}
      />
      <div
        ref={ringRef}
        className='fixed pointer-events-none z-9999 will-change-transform rounded-full border border-[#e040fb] hidden md:block'
        style={{ width: 36, height: 36, top: -18, left: -18 }}
      />
    </>
  );
};
