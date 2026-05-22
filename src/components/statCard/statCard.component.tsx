import React, { JSX } from 'react';
import SlotCounter from 'react-slot-counter';

import styles from './statCard.module.css';
import { StatCardProps } from './statCard.types';

export const StatCard: React.FC<StatCardProps> = (props: StatCardProps): JSX.Element => {
  const { icon: Icon, text, count }: StatCardProps = props;

  return (
    <div className='bg-[#1a1a1a] rounded-2xl px-10 py-8 inline-flex flex-col items-center gap-3 flex-1 transition-transform duration-500 ease-out hover:-translate-y-2'>
      <div className={styles.counter}>
        <SlotCounter
          duration={1.2}
          useMonospaceWidth
          startValue={0}
          value={count}
        />
      </div>
      <div className='w-8 h-px bg-neutral-600' />
      <div className='flex items-center gap-2 text-neutral-500 text-[11px] tracking-[0.15em] uppercase'>
        <span className='text-[13px]'>
          <Icon />
        </span>
        {text}
      </div>
    </div>
  );
};
