import type { Metadata } from 'next';

import { routeTitle } from '@/consts';
import { Route } from '@/enums';

export const metadata: Metadata = {
  title: routeTitle[Route.Contact],
  description: 'Napisz do mnie i umówmy się na sesję zdjęciową w Poznaniu i okolicach.',
};

const ContactLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => children;

export default ContactLayout;
