import { routeTitle } from '@/consts';
import { Route } from '@/enums';

export const getPageTitle = (pathname: string): string => {
  if (pathname in routeTitle) {
    return routeTitle[pathname];
  }

  if (pathname.startsWith(`${Route.Portfolio}/`)) {
    const slug: string = pathname.replace(`${Route.Portfolio}/`, '');
  
    return slug.split('-').map((word: string): string => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return '';
};
