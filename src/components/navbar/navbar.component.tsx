'use client';
import Link from 'next/link';
import React, { JSX, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { PageTransitionContextValue } from '@/interfaces';
import { usePageTransition } from '@/context';
import { routes } from '@/lib';
import clsx from 'clsx';
import { gridBackground } from '@/consts';

export const Navbar: React.FC = (): JSX.Element => {
  const { navigate }: PageTransitionContextValue = usePageTransition();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    navigate(href);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className='flex items-center justify-between p-8 w-full z-50 absolute top-0'>
      <div className='font-family-caveat text-2xl'>aleksandra robak</div>
      <nav className='hidden lg:flex gap-12'>
        <Link href={routes.about} onClick={handleNavClick(routes.about)} className='text-[#2EA56E]'>
          O mnie
        </Link>
        <Link href={routes.contact} onClick={handleNavClick(routes.contact)} className='text-[#2EA56E]'>
          Kontakt
        </Link>
      </nav>
      <button className='lg:hidden flex justify-center items-end gap-1.5 flex-col' onClick={(): void => setIsOpen(true)}>
        <span className='w-6 h-px bg-white' />
        <span className='w-6 h-px bg-gray-300' />
        <span className='w-3 h-px bg-gray-500' />
      </button>
      <aside
        className={clsx(
          'fixed top-0 left-0 bg-amber-300 h-screen w-full p-9',
          'flex transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={gridBackground}
      >
        <div className='flex justify-between w-full'>
          <div className='font-family-caveat text-2xl'>aleksandra robak</div>
          <button
            className='w-10 h-10 border border-gray-200 bg-gray-200/10 rounded-full flex justify-center items-center'
            onClick={(): void => setIsOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>
      </aside>
    </div>
  );
};
