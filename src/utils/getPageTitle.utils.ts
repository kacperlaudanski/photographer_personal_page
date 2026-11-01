import { navItems } from '@/consts';
import { Route } from '@/enums';

export const getPageTitle = (pathname: string): string => {
  const navItem = navItems.find((item) => item.href === pathname);

  if (navItem) {
    return navItem.label;
  }

  if (pathname.startsWith(`${Route.Portfolio}/`)) {
    const slug: string = pathname.replace(`${Route.Portfolio}/`, '');
  
    return slug.split('-').map((word: string): string => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return '';
};
