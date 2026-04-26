import React, { JSX } from 'react';

import { ContactDetailsItem as ContactDetailsItemInterface } from '@/interfaces';

export const ContactDetailsItem: React.FC<ContactDetailsItemInterface> = (itemData: ContactDetailsItemInterface): JSX.Element => {
  const { icon: Icon, title, description, href }: ContactDetailsItemInterface = itemData;

  return (
    <a href={href} className='flex items-center flex-1 flex-col gap-3 p-5 rounded-lg bg-fuchsia-100 text-center transition-transform duration-200 hover:scale-105 cursor-pointer'>
      <div className='p-2.5 w-11 h-11 bg-fuchsia-300 rounded-full flex items-center justify-center'>
        <Icon className='text-fuchsia-700' size={20} />
      </div>
      <div className='text-[10px] font-semibold text-fuchsia-700 leading-tight tracking-widest font-sans'>
        {title}
      </div>
      <div className='text-sm leading-tight tracking-tight font-serif'>
        {description}
      </div>
    </a>
  );
};
