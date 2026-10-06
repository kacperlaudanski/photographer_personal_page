import { Route } from '@/enums';

export const routeTitle = {
  [Route.Portfolio]: 'Portfolio',
  [Route.About]: 'O mnie',
  [Route.Contact]: 'Kontakt',
} satisfies Partial<Record<Route, string>>;
