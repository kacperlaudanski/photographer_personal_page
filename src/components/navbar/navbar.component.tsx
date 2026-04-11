'use client';
import Link from 'next/link';
import React, { JSX } from 'react';

import { PageTransitionContextValue } from '@/interfaces';
import { usePageTransition } from '@/context';
import { routes } from '@/lib';

export const Navbar: React.FC = (): JSX.Element => {
  const { navigate }: PageTransitionContextValue = usePageTransition();

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <div className='flex items-center justify-between backdrop-blur-sm p-8 fixed w-full top-0 z-50'>
      <div className='text-2xl font-bold text-cyan-600'>Logo</div>
      <nav className='flex gap-12'>
        <Link href={routes.about} onClick={handleNavClick(routes.about)} className='text-yellow-500 hover:text-yellow-700'>O mnie</Link>
        <Link href={routes.contact} onClick={handleNavClick(routes.contact)} className='text-yellow-500 hover:text-yellow-700'>Kontakt</Link>
      </nav>
    </div>
  );
};
