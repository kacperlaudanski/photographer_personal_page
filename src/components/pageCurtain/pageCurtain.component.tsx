'use client';
import { motion, Transition } from 'motion/react';

import { gridBackground } from '@/consts';
import { Route, TransitionPhase } from '@/enums';
import { getPageTitle } from '@/utils';

import { PageCurtainProps } from './pageCurtain.types';

export const PageCurtain = (props: PageCurtainProps) => {
  const { phase, destinationPath, destinationTitle, onAnimationComplete } = props;

  if (phase === TransitionPhase.Idle) {
    return null;
  }

  const getCurtainTarget = () => {
    if (phase !== TransitionPhase.Uncovering) {
      return { y: '0%', opacity: 1 };
    }

    return destinationPath === Route.Home ? { y: '0%', opacity: 0 } : { y: '-115%', opacity: 1 };
  };

  const curtainTransition: Transition = destinationPath === Route.Home && phase === TransitionPhase.Uncovering
    ? { duration: 0.6, ease: 'easeOut' }
    : { duration: 1.3, ease: [0.76, 0, 0.24, 1] };

  const getTitleTarget = () => {
    if (phase === TransitionPhase.Uncovering && destinationPath !== Route.Home) {
      return { opacity: 0, y: -16 };
    }

    return { opacity: 1, y: 0 };
  };

  const titleTransition: Transition = phase === TransitionPhase.Uncovering
    ? { duration: 0.25, ease: 'easeIn' }
    : { delay: 0.55, duration: 0.3, ease: 'easeOut' };

  return (
    <motion.div
      className='fixed inset-x-0 top-0 z-100 h-[115vh] bg-surface-dark rounded-bl-[50%_120px] rounded-br-[50%_120px] pointer-events-none overflow-hidden flex items-center justify-center pb-[15vh]'
      initial={{ y: '-115%' }}
      animate={getCurtainTarget()}
      transition={curtainTransition}
      onAnimationComplete={onAnimationComplete}
      style={gridBackground}
    >
      <motion.h1
        className='relative z-10 text-on-accent text-7xl font-display'
        initial={{ opacity: 0, y: 16 }}
        animate={getTitleTarget()}
        transition={titleTransition}
      >
        {destinationPath === Route.Home
          ? (
              <span className='flex flex-col items-center leading-none tracking-tight'>
                Aleksandra
                <span className='text-gradient-brand font-handwrite'>Robak</span>
              </span>
            )
          : destinationTitle ?? getPageTitle(destinationPath)
        }
      </motion.h1>
    </motion.div>
  );
};
