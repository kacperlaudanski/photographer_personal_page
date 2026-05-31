import Link from 'next/link';
import React from 'react';

import { MobileNavbarItemProps } from './mobileNavbarItem.types';

export const MobileNavbarItem: React.FC<MobileNavbarItemProps> = (props: MobileNavbarItemProps) => {
  const { title, description, isActive, id, path, onClick }: MobileNavbarItemProps = props;

  return (
    <Link className='block w-full py-7 border-b border-gray-400' href={path} onClick={onClick}>
      <div className='flex items-center justify-between'>
        {/* content */}
        <div className='flex items-center gap-8'>
          <div className='text-sm font-family-jet-brains'>
            {id}
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-5xl font-serif'>
              {title}
            </div>
            <div className='text-xl font-family-caveat'>
              {description}
            </div>
          </div>
        </div>
        <div className='relative flex items-center justify-center'>
          {isActive ? (
            <>
              <div className='absolute w-7 h-7 rounded-full bg-fuchsia-600/20 blur-xl' />
              <div className='absolute w-7 h-7 rounded-full bg-fuchsia-600/30 blur-md' />
              <div className='relative w-3 h-3 rounded-full bg-fuchsia-500' />
            </>
          ) : (
            <div className='w-3 h-3 rounded-full border border-gray-400' />
          )}
        </div>
      </div>
    </Link>
  );
};
