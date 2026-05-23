import React, { JSX } from 'react';
import SlotCounter from 'react-slot-counter';

import styles from './timelineEntry.module.css';
import { TimelineEntryProps } from './timelineEntry.types';

export const TimelineEntry: React.FC<TimelineEntryProps> = (props: TimelineEntryProps): JSX.Element => {
  const { header, description, year }: TimelineEntryProps = props;

  return (
    <div className='min-w-3xs flex flex-col shrink-0 gap-2 transition-transform duration-500 ease-out hover:-translate-y-2 bg-white p-6 rounded-lg flex-1'>
      <div className={styles.year}>
        <SlotCounter
          value={year}
          startValue={9999}
          useMonospaceWidth
          sequentialAnimationMode
          duration={1.2}
          animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }}
        />
      </div>
      <p className='font-bold text-gray-800 mt-2'>
        {header}
      </p>
      <p className='text-gray-500 text-sm leading-relaxed'>
        {description}
      </p>
    </div>
  );
};
