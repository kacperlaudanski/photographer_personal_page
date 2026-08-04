import Link from 'next/link';

import { MobileNavbarItemProps } from './mobileNavbarItem.types';

export const MobileNavbarItem = (props: MobileNavbarItemProps) => {
  const { title, description, isActive, id, path, onClick } = props;

  return (
    <Link className='block w-full py-7 border-b border-subtle' href={path} onClick={onClick}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <div className='text-sm font-mono text-subtle'>
            {id}
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-5xl font-display text-on-accent'>
              {title}
            </div>
            <div className='text-xl font-handwrite text-subtle'>
              {description}
            </div>
          </div>
        </div>
        <div className='relative flex items-center justify-center'>
          {isActive ? (
            <>
              <div className='absolute w-7 h-7 rounded-full bg-variant-pink/20 blur-xl' />
              <div className='absolute w-7 h-7 rounded-full bg-variant-pink/30 blur-md' />
              <div className='relative w-3 h-3 rounded-full bg-variant-pink' />
            </>
          ) : (
            <div className='w-3 h-3 rounded-full border border-subtle' />
          )}
        </div>
      </div>
    </Link>
  );
};
