import { TargetAndTransition } from 'motion';

import { CursorLabelAnimation } from '@/enums';

export interface CursorVariantConfig {
  ring: TargetAndTransition;
  ringClassName: string;
  label?: string;
  labelAnimation?: CursorLabelAnimation;
  hideDot?: boolean;
  magnetic?: boolean;
}
