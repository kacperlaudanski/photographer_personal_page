import SlotCounter from 'react-slot-counter';

import { TimelineEntryProps } from './timelineEntry.types';

export const TimelineEntry = (props: TimelineEntryProps) => {
  const { header, description, year } = props;

  return (
    <div className='min-w-3xs flex flex-col shrink-0 gap-2 transition-transform duration-500 ease-out hover:-translate-y-2 bg-surface-raised p-6 rounded-lg flex-1'>
      <div className='font-display text-accent-pink text-3xl'>
        <SlotCounter
          value={year}
          startValue={9999}
          useMonospaceWidth
          sequentialAnimationMode
          duration={1.2}
          animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }}
        />
      </div>
      <p className='font-bold text-default'>
        {header}
      </p>
      <p className='text-muted text-sm leading-relaxed'>
        {description}
      </p>
    </div>
  );
};
