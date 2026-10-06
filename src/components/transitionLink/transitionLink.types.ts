import Link from 'next/link';
import { ComponentProps } from 'react';

export interface TransitionLinkProps extends Omit<typeof Link, 'href'> {
  href: string;
  transitionTitle?: string;
}
