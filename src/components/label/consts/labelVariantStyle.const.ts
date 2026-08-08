import { LabelVariant } from '@/enums';

export const containerVariant = {
  [LabelVariant.Pink]: 'border-variant-pink text-variant-pink-text bg-variant-pink-soft',
  [LabelVariant.Blue]: 'border-variant-blue text-variant-blue-text bg-variant-blue-soft',
  [LabelVariant.Green]: 'border-variant-green text-variant-green-text bg-variant-green-soft',
  [LabelVariant.Purple]: 'border-variant-purple text-variant-purple-text bg-variant-purple-soft',
};

export const labelVariantStyle = {
  [LabelVariant.Pink]: {
    container: 'border-variant-pink text-variant-pink-text bg-variant-pink-soft',
    dot: 'bg-variant-pink',
  },
  [LabelVariant.Blue]: {
    container: 'border-variant-blue text-variant-blue-text bg-variant-blue-soft',
    dot: 'bg-variant-blue',
  },
  [LabelVariant.Green]: {
    container: 'border-variant-green text-variant-green-text bg-variant-green-soft',
    dot: 'bg-variant-green',
  },
  [LabelVariant.Purple]: {
    container: 'border-variant-purple text-variant-purple-text bg-variant-purple-soft',
    dot: 'bg-variant-purple',
  },
};
