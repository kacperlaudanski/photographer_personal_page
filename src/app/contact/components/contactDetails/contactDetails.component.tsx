import React, { JSX } from 'react';

import { ContactDetailsItem as ContactDetailsItemInterface } from '@/interfaces';

import { ContactDetailsItem } from '../contactDetailsItem/contactDetailsItem.component';

import { ContactDetailsProps } from './contactDetails.types';

export const ContactDetails: React.FC<ContactDetailsProps> = (props: ContactDetailsProps): JSX.Element => {
  const { items }: ContactDetailsProps = props;

  return (
    <div className='flex flex-col sm:flex-row gap-4'>
      {items.map((item: ContactDetailsItemInterface): JSX.Element => (
        <ContactDetailsItem
          description={item.description}
          href={item.href}
          icon={item.icon}
          key={item.title}
          title={item.title}
        />
      ))}
    </div>
  );
};
