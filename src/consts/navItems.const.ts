import { Route } from '@/enums';

export const navItems = [
  { href: Route.Home, label: 'Start', description: 'strona główna' },
  { href: Route.About, label: 'O mnie', description: 'kim jestem' },
  { href: Route.Portfolio, label: 'Portfolio', description: 'wybrane kadry' },
  { href: Route.Contact, label: 'Kontakt', description: 'napisz do mnie' },
] as const;
