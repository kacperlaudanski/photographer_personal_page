'use client';
import Link from 'next/link';
import { MouseEvent } from 'react';

import { usePageTransition } from '@/context';

import { TransitionLinkProps } from './transitionLink.types';

export const TransitionLink = (props: TransitionLinkProps) => {
  const { href, transitionTitle, onClick, ...rest } = props;
  const { navigate } = usePageTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    const isModifiedClick = e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    if (e.defaultPrevented || isModifiedClick) {
      return;
    }

    e.preventDefault();
    navigate(href, transitionTitle);
  };

  return <Link {...rest} href={href} onClick={handleClick} />;
};
