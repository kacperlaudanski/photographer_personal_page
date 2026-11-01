'use client';
import { usePathname } from 'next/navigation';

import { Route } from '@/enums';

import { Footer } from '../footer/footer.component';

export const ConditionalFooter = () => {
  const pathname = usePathname();

  if (pathname === Route.Home) {
    return null;
  }

  return <Footer />;
};
