import { motion } from 'framer-motion';

import { ProgressBarProps } from './progressBar.types';

export const ProgressBar = (props: ProgressBarProps) => {
  const { activeIndex, totalAmount, description } = props;

  return (
    <div className='flex flex-col items-center justify-center pt-10 w-full'>
      <div className='mx-4 my-4 h-px bg-black/10 w-full'>
        <motion.div
          className='h-[1.5px] bg-variant-pink '
          animate={{ width: `${((activeIndex + 1) / totalAmount) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
      <div className='flex items-center justify-between w-full'>
        <span className='font-display text-md'>
          {description}
        </span>
        <span className='shrink-0 font-mono text-subtle text-sm'>
          {activeIndex + 1} / {totalAmount}
        </span>
      </div>
    </div>
  );
};
