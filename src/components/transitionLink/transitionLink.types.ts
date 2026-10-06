import Link from 'next/link';
import { ComponentProps } from 'react';

export interface TransitionLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  href: string;
  transitionTitle?: string;
}
