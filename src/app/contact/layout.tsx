import type { Metadata } from 'next';

import { Route } from '@/enums';
import { getPageTitle } from '@/utils';

export const metadata: Metadata = {
  title: getPageTitle(Route.Contact),
  description: 'Napisz do mnie i umówmy się na sesję zdjęciową w Poznaniu i okolicach.',
};

const ContactLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => children;

export default ContactLayout;
