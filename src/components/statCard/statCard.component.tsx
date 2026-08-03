import React, { JSX } from 'react';
import SlotCounter from 'react-slot-counter';

import { StatCardProps } from './statCard.types';

export const StatCard: React.FC<StatCardProps> = (props: StatCardProps): JSX.Element => {
  const { icon: Icon, text, count }: StatCardProps = props;

  return (
    <div className='bg-surface-dark rounded-2xl px-10 py-8 inline-flex flex-col items-center gap-3 flex-1 transition-transform duration-500 ease-out hover:-translate-y-2'>
      <div className='font-mono text-5xl text-on-accent font-bold border-b border-muted pb-2'>
        <SlotCounter duration={1.2} useMonospaceWidth startValue={0} value={count} />
      </div>
      <div className='flex items-center gap-2 text-muted text-xs tracking-[0.15em] uppercase mt-2'>
        <Icon />
        <p>{text}</p>
      </div>
    </div>
  );
};
