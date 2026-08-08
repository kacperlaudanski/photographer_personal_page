import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import { ContactDetailsItemVariant } from '@/enums';

export const contactItems = [
  {
    icon: FaInstagram,
    title: 'INSTAGRAM',
    description: '@alexandra.robak_photography',
    href: 'https://instagram.com/alexandra.robak_photography',
    index: 1,
    variant: ContactDetailsItemVariant.Pink,
  },
  {
    icon: FaPhoneAlt,
    title: 'TELEFON',
    description: '+48 500 060 125',
    href: 'tel:+48500060125',
    index: 2,
    variant: ContactDetailsItemVariant.Blue,
  },
  {
    icon: IoIosMail,
    title: 'EMAIL',
    description: 'aleksandrarobak3@gmail.com',
    href: 'mailto:aleksandrarobak3@gmail.com',
    index: 3,
    variant: ContactDetailsItemVariant.DarkPurple,
  },
];
