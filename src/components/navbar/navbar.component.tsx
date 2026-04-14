import Image from 'next/image';
import Link from 'next/link';
import React, { JSX } from 'react';

import { routes } from '@/lib';

export const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className='flex items-center justify-between backdrop-blur-sm p-8 fixed w-full top-0 z-50'>
      <Image src='/assets/logo.png' alt='Logo' width={120} height={40} />
      <nav className='flex gap-12'>
        <Link href={routes.about} className='text-yellow-500 hover:text-yellow-700'>O mnie</Link>
        <Link href={routes.contact} className='text-yellow-500 hover:text-yellow-700'>Kontakt</Link>
      </nav>
    </div>
  );
};
