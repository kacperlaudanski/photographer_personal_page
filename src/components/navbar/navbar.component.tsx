'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { gridBackground, navItems } from '@/consts';
import { Route } from '@/enums';

import { MobileNavbarItem } from '../mobileNavbarItem/mobileNavbarItem.component';
import { TransitionLink } from '../transitionLink/transitionLink.component';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
    <div className='flex items-center justify-between p-4 md:p-8 w-full z-50 absolute top-0'>
      <div className='font-handwrite text-2xl text-subtle'>
        {pathname !== Route.Home && (
          <TransitionLink href={Route.Home}>
            aleksandra robak
          </TransitionLink>
        )}
      </div>
      <nav className='hidden lg:flex gap-12'>
        {navItems.map((navItem) => (
          <TransitionLink
            href={navItem.href}
            key={navItem.href}
            className='text-accent font-display hover:underline group'
          >
            {navItem.label.split('').map((letter, index) => (
              <span
                className='inline-block group-hover:animate-[letter-wave_0.6s_ease-in-out]'
                key={index}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </TransitionLink>
        ))}
      </nav>
      <button className='lg:hidden flex justify-center items-end gap-1.5 flex-col' onClick={() => setIsOpen(true)}>
        <span className='w-6 h-px bg-muted' />
        <span className='w-5 h-px bg-subtle' />
        <span className='w-4 h-px bg-faint' />
      </button>
      <aside
        className={clsx(
          'fixed top-0 left-0 h-screen w-full p-9',
          'flex transition-transform duration-300 ease-in-out flex-col',
          'overflow-y-auto overscroll-contain',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={gridBackground}
      >
        <div className='flex justify-end w-full'>
          <button
            className='w-10 h-10 border border-faint bg-faint/10 rounded-full text-on-accent flex justify-center items-center'
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <div className='flex items-center gap-4 text-sm mt-8 tracking-widest text-subtle font-mono'>
          <span>→</span>
          <span>NAWIGACJA</span>
        </div>
        <div className='mt-6'>
          {navItems.map((navItem, index) => (
            <MobileNavbarItem
              description={navItem.description}
              id={index}
              isActive={pathname === navItem.href}
              key={navItem.label}
              onClick={() => setIsOpen(false)}
              path={navItem.href}
              title={navItem.label}
            />
          ))}
        </div>
      </aside>
    </div>
  );
};
