'use client';
import { usePathname } from 'next/navigation';

import { Footer } from '../footer/footer.component';

export const ConditionalFooter = () => {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return <Footer />;
};
