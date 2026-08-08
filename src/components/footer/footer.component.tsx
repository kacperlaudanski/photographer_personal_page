'use client';
import Link from 'next/link';

import { navItems } from '@/consts';
import { usePageTransition } from '@/context';

export const Footer = () => {
  const { navigate } = usePageTransition();

  return (
    <div className='w-full py-8.5 px-13.5'>
      <div className='flex justify-between items-center border-b border-faint pb-6'>
        <h3 className='font-handwrite text-lg text-subtle'>
          „Najlepsze kadry dzieją się, kiedy nikt już nie pozuje.”
        </h3>
        <div className='flex gap-12'>
          {navItems.slice(1).map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => navigate(item.href)}
              className='text-accent hover:text-accent-soft transition-colors duration-300'
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className='pt-4 flex justify-between'>
        <span className='font-mono text-sm text-subtle'>ALEKSANDRA R. · FOTOGRAFIA</span>
        <span className='font-mono text-sm text-subtle'>POZNAŃ</span>
        <div className='flex gap-2 font-mono text-sm text-subtle'>
          <a className='text-accent hover:text-accent-soft transition-colors duration-300'>INSTAGRAM</a>
          <a className='text-accent hover:text-accent-soft transition-colors duration-300'>FACEBOOK</a>
        </div>
        <span className='font-mono text-sm text-subtle'>
          © 2026 · POZNAŃ
        </span>
      </div>
    </div>
  );
};
