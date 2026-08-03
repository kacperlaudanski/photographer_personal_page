import { PolaroidItemVariant } from '@/enums';

export const polaroidItemIconBoxColors: Record<PolaroidItemVariant, string> = {
  purple: 'bg-variant-purple shadow-variant-purple',
  pink: 'bg-variant-pink shadow-variant-pink',
  blue: 'bg-variant-blue shadow-variant-blue',
  darkPurple: 'bg-variant-purple-dark shadow-variant-purple-dark',
};

export const polaroidItemLabelColors: Record<PolaroidItemVariant, string> = {
  purple: 'text-variant-purple',
  pink: 'text-variant-pink',
  blue: 'text-variant-blue',
  darkPurple: 'text-variant-purple-dark',
};
