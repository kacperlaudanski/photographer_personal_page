import clsx from 'clsx';

import { ToggleButtonGroupProps } from './toggleButtonGroup.types';

export const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
  const { options, onChange, value } = props;

  return (
    <div className='flex gap-3'>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          aria-pressed={option === value}
          className={clsx(
            'rounded-full border px-6 py-2 font-mono transition-colors text-sm',
            option === value
              ? 'bg-accent text-on-accent'
              : 'bg-transparent text-inherit hover:bg-accent-hover hover:text-on-accent',
          )}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
