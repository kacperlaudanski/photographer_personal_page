import { motion } from 'motion/react';
import React from 'react';

import { CursorLabelAnimation } from '@/enums';

import { labelAnimations } from './label.consts';
import { LabelProps } from './label.types';

export const Label = (props: LabelProps) => {
  const { text, animation } = props;

  const { className, ...motionProps } = labelAnimations[animation];

  return (
    <motion.span className={`absolute ${className}`} {...motionProps}>
      {animation === CursorLabelAnimation.Circle && (
        <>
          <motion.svg
            className='w-full h-full fill-current'
            viewBox='0 0 100 100'
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
          >
            <defs>
              <path id='cursor-label-circle' d='M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0' />
            </defs>
            <text className='font-mono uppercase' fontSize='9' letterSpacing='2.5'>
              <textPath href='#cursor-label-circle' textLength='224'>
                {`${text} · ${text} · ${text} · `}
              </textPath>
            </text>
          </motion.svg>
          <span className='absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-current' />
        </>
      )}
      {animation === CursorLabelAnimation.Letters && text.split('').map((letter, index) => (
        <motion.span
          key={index}
          className='inline-block whitespace-pre'
          variants={{
            hidden: { opacity: 0, y: 6 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {letter}
        </motion.span>
      ))}
      {(animation === CursorLabelAnimation.Slide || animation === CursorLabelAnimation.Mask) && text}
    </motion.span>
  );
};
