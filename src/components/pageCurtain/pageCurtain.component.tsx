'use client';
import { motion } from 'framer-motion';

import { TransitionPhase } from '@/enums';
import { getPageTitle } from '@/utils';

import { PageCurtainProps } from './pageCurtain.types';

export const PageCurtain = (props: PageCurtainProps) => {
  const { phase, destinationPath, onAnimationComplete } = props;

  if (phase === TransitionPhase.Idle) {
    return null;
  }

  const getYTarget = (phase: TransitionPhase) => {
    if (phase === TransitionPhase.Covering || phase === TransitionPhase.Navigating) {
      return '0%';
    }
  
    return '-115%';
  };

  return (
    <motion.div
      className='fixed inset-x-0 top-0 z-100 h-[115vh] bg-surface-dark rounded-bl-[50%_120px] rounded-br-[50%_120px] pointer-events-none overflow-hidden flex items-center justify-center pb-[15vh]'
      initial={{ y: '-115%' }}
      animate={{ y: getYTarget(phase) }}
      transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onAnimationComplete}
    >
      <motion.h1
        className='relative z-10 text-on-accent text-7xl font-display'
        initial={{ opacity: 0, y: 16 }}
        animate={phase === TransitionPhase.Uncovering
          ? { opacity: 0, y: -16 }
          : { opacity: 1, y: 0 }
        }
        transition={phase === TransitionPhase.Uncovering
          ? { duration: 0.25, ease: 'easeIn' }
          : { delay: 0.55, duration: 0.3, ease: 'easeOut' }
        }
      >
        {getPageTitle(destinationPath)}
      </motion.h1>
    </motion.div>
  );
};
