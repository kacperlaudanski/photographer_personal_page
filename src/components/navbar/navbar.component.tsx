'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { usePageTransition } from '@/context';
import { gridBackground, navItems } from '@/consts';

import { MobileNavbarItem } from '../mobileNavbarItem/mobileNavbarItem.component';

export const Navbar = () => {
  const { navigate } = usePageTransition();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (href: string) => (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setIsOpen(false);
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
    <div className='flex items-center justify-between p-4 md:p-8 w-full z-50 absolute top-0'>
      <div className='font-handwrite text-2xl text-subtle'>
        {pathname !== '/' && (
          <Link href='/'>
            aleksandra robak
          </Link>
        )}
      </div>
      <nav className='hidden lg:flex gap-12'>
        {navItems.slice(1).map((navItem) => (
          <Link
            href={navItem.href}
            key={navItem.href}
            onClick={handleNavClick(navItem.href)}
            className={clsx(pathname === '/' ? 'text-accent-soft' : 'text-success')}
          >
            {navItem.label}
          </Link>
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
          {navItems.slice(1).map((navItem, index) => (
            <MobileNavbarItem
              description={navItem.description}
              id={index}
              isActive={pathname === navItem.href}
              key={navItem.label}
              onClick={handleNavClick(navItem.href)}
              path={navItem.href}
              title={navItem.label}
            />
          ))}
        </div>
      </aside>
    </div>
  );
};
