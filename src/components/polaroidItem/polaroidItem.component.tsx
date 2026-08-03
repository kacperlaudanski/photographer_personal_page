import clsx from 'clsx';
import React, { JSX } from 'react';

import { polaroidItemIconBoxColors, polaroidItemLabelColors } from '@/consts';

import { PolaroidItemProps } from './polaroidItem.types';

export const PolaroidItem: React.FC<PolaroidItemProps> = (props: PolaroidItemProps): JSX.Element => {
  const { label, icon: Icon, variant, style }: PolaroidItemProps = props;

  return (
    <div className='flex flex-col shrink-0 rounded-sm p-2.5 pb-3.5 w-28 bg-surface-raised shadow-card' style={style}>
      <div className='aspect-square rounded-sm bg-surface-accent flex items-center justify-center mb-2.5 relative overflow-hidden'>
        <div className={clsx('flex items-center justify-center rounded-full h-12 w-12 text-on-accent', polaroidItemIconBoxColors[variant])}>
          <Icon size={20} />
        </div>
      </div>
      <p className={clsx('font-handwrite text-xl text-center mt-1', polaroidItemLabelColors[variant])}>
        {label}
      </p>
    </div>
  );
};
