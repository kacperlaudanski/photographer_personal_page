'use client';
import Link from 'next/link';

import { navItems } from '@/consts';
import { usePageTransition } from '@/context';

export const Footer = () => {
  const { navigate } = usePageTransition();

  const socialLinks = (
    <div className='flex gap-2 font-mono text-sm text-subtle'>
      <a href='...' className='text-accent hover:text-accent-soft transition-colors duration-300'>
        INSTAGRAM
      </a>
      <a href='...' className='text-accent hover:text-accent-soft transition-colors duration-300'>
        FACEBOOK
      </a>
    </div>
  );

  return (
    <div className='w-full px-4 py-8.5 md:px-13.5 bg-surface-dark'>
      <div className='flex flex-col md:flex-row gap-6 justify-between md:items-center border-b border-subtle pb-6'>
        <h3 className='font-handwrite text-lg text-subtle'>
          „Najlepsze kadry dzieją się, kiedy nikt już nie pozuje.”
        </h3>
        <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
          {navItems.slice(1).map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => navigate(item.href)}
              className='text-accent hover:text-accent-soft transition-colors duration-300 text-sm font-display'
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className='hidden pt-4 md:flex justify-between'>
        <div className='font-mono text-sm text-subtle'>ALEKSANDRA R. · FOTOGRAFIA</div>
          {socialLinks}
        <span className='font-mono text-sm text-subtle'>
          © 2026 · POZNAŃ
        </span>
      </div>
      <div className='flex md:hidden font-mono text-sm text-subtle mt-4 justify-between'>
        <span className='font-mono text-sm text-subtle justify-center'>
          © 2026 · POZNAŃ
        </span>
        {socialLinks}
      </div>
    </div>
  );
};
