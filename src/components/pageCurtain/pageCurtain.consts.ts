import { Variants } from 'motion';

export const titleVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: [0, 1, 1, 0],
    y: [24, 0, 0, -24],
    transition: {
      duration: 1.8,
      times: [0.28, 0.42, 0.58, 0.72],
      ease: 'easeInOut',
    },
  },
};
