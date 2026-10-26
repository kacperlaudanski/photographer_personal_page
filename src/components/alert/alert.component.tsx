'use client';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useEffect, useEffectEvent } from 'react';
import { IoMdClose } from 'react-icons/io';

import { alertVariantStyle } from '@/consts';

import { AlertProps } from './alert.types';
import { CursorVariant } from '@/enums';

export const Alert = (props: AlertProps) => {
  const { title, message, onClose, variant, autoHideDuration } = props;
  const { container, icon: Icon, role } = alertVariantStyle[variant];
  const handleAutoHide = useEffectEvent(() => onClose());

  useEffect(() => {
    if (!autoHideDuration) {
      return;
    }

    const timeout = setTimeout(handleAutoHide, autoHideDuration);

    return () => clearTimeout(timeout);
  }, [autoHideDuration]);

  return (
    <motion.div
      className={clsx('flex items-start gap-3 border rounded-2xl px-4 py-3 shadow-card', container)}
      exit={{ opacity: 0, y: -8 }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      role={role}
    >
      <Icon className='shrink-0 mt-0.5' size={18} />
      <div className='flex flex-col gap-1 flex-1 min-w-0'>
        <span className='text-xs font-semibold font-mono tracking-widest uppercase'>
          {title}
        </span>
        <p className='text-sm text-default'>
          {message}
        </p>
      </div>
      {!autoHideDuration && (
        <button
          aria-label='Zamknij'
          className='shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-current/10'
          data-cursor={CursorVariant.Link}
          onClick={onClose}
          type='button'
        >
          <IoMdClose size={14} />
        </button>
      )}
    </motion.div>
  );
};
