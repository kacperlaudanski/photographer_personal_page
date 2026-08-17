import clsx from 'clsx';

import { LabelData } from '@/interfaces';

import { labelVariantStyle } from './consts';

export const Label = (props: LabelData) => {
  const { text, variant } = props;

  return (
    <div className={clsx('flex items-center border px-3 py-1 rounded-full text-[10px] font-medium font-mono', labelVariantStyle[variant].container)}>
      <div className={clsx('w-1 h-1 rounded-full', labelVariantStyle[variant].dot)} />
      <span className='ml-2'>{text}</span>
    </div>
  );
};
