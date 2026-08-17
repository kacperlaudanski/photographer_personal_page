import clsx from 'clsx';

import { ContactDetailsItemVariant } from '@/enums';
import { ContactDetailsItem as ContactDetailsItemInterface } from '@/interfaces';

import { contactDetailsItemVariant } from './consts';

export const ContactDetailsItem = (props: ContactDetailsItemInterface) => {
  const { icon: Icon, title, description, href, variant = ContactDetailsItemVariant.DarkPurple, index } = props;

  return (
    <a
      href={href}
      className={clsx(
        'group relative flex flex-1 flex-col items-center gap-3 p-5 pt-6 rounded-2xl text-center cursor-pointer',
        'transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_32px_-8px_color-mix(in_oklch,var(--color-neutral-950)_15%,transparent)]',
        contactDetailsItemVariant[variant].bg,
      )}
    >
      <span className={clsx('absolute top-3 right-4 text-[10px] tracking-widest font-mono opacity-60', contactDetailsItemVariant[variant].accent)}>
        NO. {String(index).padStart(2, '0')}
      </span>
      <div className={clsx('p-2.5 w-11 h-11 rounded-full flex items-center justify-center', contactDetailsItemVariant[variant].iconBg)}>
        <Icon className='text-on-accent' size={20} />
      </div>
      <div className={clsx('text-[10px] font-semibold tracking-widest font-mono', contactDetailsItemVariant[variant].accent)}>
        {title}
      </div>
      <div className='text-sm leading-tight tracking-tight font-display text-default whitespace-nowrap'>
        {description}
      </div>
    </a>
  );
};
