'use client';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { cursorVariant } from '@/consts';
import { useCursor } from '@/hooks';

import { Label } from './components';

export const Cursor = () => {
  const { dotRef, ringRef, variant, label, isPressed, isVisible, isEnabled } = useCursor();

  if (!isEnabled) {
    return null;
  }

  return (
    <div className={clsx('transition-opacity duration-300', isVisible ? 'opacity-100' : 'opacity-0')}>
      <div
        ref={dotRef}
        className='fixed top-0 left-0 w-0 h-0 flex items-center justify-center pointer-events-none z-10000 will-change-transform'
      >
        <motion.div
          className='shrink-0 w-1.5 h-1.5 rounded-full bg-focus'
          animate={{ opacity: cursorVariant[variant].hideDot ? 0 : 1, scale: cursorVariant[variant].hideDot ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div
        ref={ringRef}
        className='fixed top-0 left-0 w-0 h-0 flex items-center justify-center pointer-events-none z-10000 will-change-transform'
      >
        <motion.div
          className={clsx('relative shrink-0 flex items-center justify-center', cursorVariant[variant].ringClassName)}
          animate={{ ...cursorVariant[variant].ring, scale: isPressed ? 0.8 : 1 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.6 }}
        >
          <AnimatePresence>
            {!!label && !!cursorVariant[variant].labelAnimation && (
              <Label
                animation={cursorVariant[variant].labelAnimation}
                key={`${variant}-${label}`}
                text={label}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
