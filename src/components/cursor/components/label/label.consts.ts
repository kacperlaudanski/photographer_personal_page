import { MotionProps, Transition } from 'motion/react';

import { CursorLabelAnimation } from '@/enums';

const enterTransition: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
  delay: 0.12,
};

const exitTransition: Transition = {
  duration: 0.15,
  ease: 'easeIn',
};

export const labelAnimations: Record<CursorLabelAnimation, MotionProps & { className: string }> = {
  [CursorLabelAnimation.Slide]: {
    className: `left-full ml-3 px-3 py-1.5 rounded-full bg-accent text-on-accent font-mono text-[10px] tracking-widest uppercase whitespace-nowrap`,
    initial: { opacity: 0, x: -12, clipPath: 'inset(0 100% 0 0 round 999px)' },
    animate: { opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0 round 999px)', transition: enterTransition },
    exit: { opacity: 0, x: -6, transition: exitTransition },
  },
  [CursorLabelAnimation.Mask]: {
    className: 'font-mono text-[10px] tracking-widest uppercase whitespace-nowrap',
    initial: { y: '100%', clipPath: 'inset(0 0 100% 0)' },
    animate: { y: '0%', clipPath: 'inset(0 0 0% 0)', transition: enterTransition },
    exit: { y: '-100%', clipPath: 'inset(100% 0 0 0)', transition: exitTransition },
  },
  [CursorLabelAnimation.Letters]: {
    className: `flex font-mono text-[10px] tracking-widest uppercase whitespace-nowrap`,
    initial: 'hidden',
    animate: 'visible',
    exit: { opacity: 0, transition: exitTransition },
    variants: {
      visible: {
        transition: { delayChildren: 0.12, staggerChildren: 0.04 },
      },
    },
  },
  [CursorLabelAnimation.Circle]: {
    className: 'inset-0',
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1, transition: enterTransition },
    exit: { opacity: 0, scale: 0.8, transition: exitTransition },
  },
};
