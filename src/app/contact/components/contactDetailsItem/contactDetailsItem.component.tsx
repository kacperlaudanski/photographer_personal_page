// move to main components
import clsx from 'clsx';
import React, { JSX } from 'react';

import { contactVariants } from '@/consts';
import { ContactDetailsItem as ContactDetailsItemInterface } from '@/interfaces';

export const ContactDetailsItem: React.FC<ContactDetailsItemInterface> = (itemData: ContactDetailsItemInterface): JSX.Element => {
  const { icon: Icon, title, description, href, variant = 'darkPurple', index }: ContactDetailsItemInterface = itemData;
  const v = contactVariants[variant];
  const no = String(index).padStart(2, '0');

  return (
    <a
      href={href}
      className={clsx(
        'group relative flex flex-1 flex-col items-center gap-3 p-5 pt-6 rounded-2xl text-center cursor-pointer',
        'transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.15)]',
        v.bg,
      )}
    >
      <span className={clsx('absolute top-3 right-4 text-[10px] tracking-widest font-jet-brains opacity-60', v.accent)}>
        NO. {no}
      </span>
      <div className={clsx('p-2.5 w-11 h-11 rounded-full flex items-center justify-center', v.iconBg)}>
        <Icon className='text-white' size={20} />
      </div>
      <div className={clsx('text-[10px] font-semibold tracking-widest font-jet-brains', v.accent)}>
        {title}
      </div>
      <div className='text-sm leading-tight tracking-tight font-serif text-gray-700 whitespace-nowrap'>
        {description}
      </div>
    </a>
  );
};
