import clsx from 'clsx';
import React from 'react';

import { LabelVariant } from '@/enums';
import { LabelData } from '@/interfaces';

const labelVariant: Record<LabelVariant, string> = {
  [LabelVariant.Pink]: 'border-pink-500 text-pink-700 bg-pink-50',
  [LabelVariant.Blue]: 'border-blue-500 text-blue-700 bg-blue-50',
  [LabelVariant.Green]: 'border-emerald-500 text-emerald-700 bg-emerald-50',
  [LabelVariant.Purple]: 'border-violet-500 text-violet-700 bg-violet-50',
};

const dotVariant: Record<LabelVariant, string> = {
  [LabelVariant.Pink]: 'bg-pink-500',
  [LabelVariant.Blue]: 'bg-blue-500',
  [LabelVariant.Green]: 'bg-emerald-500',
  [LabelVariant.Purple]: 'bg-violet-500',
};

export const Label = (props: LabelData) => {
  const { text, variant }: LabelData = props;

  return (
    <div className={clsx('flex items-center border px-3 py-1 rounded-full text-[10px] font-medium font-family-jet-brains', labelVariant[variant])}>
      <div className={clsx('w-1 h-1 rounded-full', dotVariant[variant])} />
      <span className='ml-2'>{text}</span>
    </div>
  );
};
