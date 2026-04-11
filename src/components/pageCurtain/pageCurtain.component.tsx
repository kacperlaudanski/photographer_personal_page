'use client';
import { motion } from 'framer-motion';
import React, { JSX } from 'react';

import { usePageTransition } from '@/context';
import { TransitionPhase } from '@/enums';
import { PageTransitionContextValue } from '@/interfaces';
import { getPageTitle } from '@/utils';

const getYTarget = (phase: TransitionPhase): string => {
  if (phase === TransitionPhase.Covering) { return '0%'; }
  if (phase === TransitionPhase.Navigating) { return '0%'; }

  return '-115%';
};

export const PageCurtain: React.FC = (): JSX.Element | null => {
  const { phase, destinationPath, onCoverComplete, onUncoverComplete }: PageTransitionContextValue = usePageTransition();

  if (phase === TransitionPhase.Idle) {
    return null;
  }

  const handleAnimationComplete = (): void => {
    if (phase === TransitionPhase.Covering) {
      onCoverComplete();
    } else if (phase === TransitionPhase.Uncovering) {
      onUncoverComplete();
    }
  };

  return (
    <motion.div
      className='fixed inset-x-0 top-0 z-100 h-[115vh] bg-[#1e1e1e] rounded-bl-[50%_120px] rounded-br-[50%_120px] pointer-events-none overflow-hidden flex items-center justify-center'
      initial={{ y: '-115%' }}
      animate={{ y: getYTarget(phase) }}
      transition={{ duration: 0.96, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.h1
        className='relative z-10 text-white text-7xl font-black italic font-serif'
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
