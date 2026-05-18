import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import { ContactDetailsItem } from '@/interfaces';

export const contactItems: ContactDetailsItem[] = [
  {
    icon: FaInstagram,
    title: 'INSTAGRAM',
    description: '@alexandra.robak_photography',
    href: 'https://instagram.com/alexandra.robak_photography',
  },
  {
    icon: FaPhoneAlt,
    title: 'TELEFON',
    description: '+48 500 060 125',
    href: 'tel:+48500060125',
  },
  {
    icon: IoIosMail,
    title: 'EMAIL',
    description: 'aleksandrarobak3@gmail.com',
    href: 'mailto:aleksandrarobak3@gmail.com',
  },
];
