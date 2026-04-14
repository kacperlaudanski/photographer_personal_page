import { routeTitle } from '@/consts';
import { Path } from '@/enums';

export const getPageTitle = (pathname: string): string => {
  if (pathname in routeTitle) {
    return routeTitle[pathname];
  }

  if (pathname.startsWith(`${Path.Sessions}/`)) {
    const slug: string = pathname.replace(`${Path.Sessions}/`, '');
  
    return slug.split('-').map((word: string): string => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return '';
};
