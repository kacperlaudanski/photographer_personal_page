import { IconType } from 'react-icons';

import { PolaroidItemVariant } from '@/enums';

export interface PolaroidItemProps {
  label: string;
  visibleId: string;
  icon: IconType;
  variant: PolaroidItemVariant;
  style?: React.CSSProperties;
}
