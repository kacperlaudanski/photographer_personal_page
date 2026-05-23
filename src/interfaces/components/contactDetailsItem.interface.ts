import { ContactVariant } from '@/consts/contactItemVariants.const';
import { ComponentType } from 'react';

export interface ContactDetailsItem {
  icon: ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  href: string;
  index: number;
  variant?: ContactVariant;
}
