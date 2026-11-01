import { IoMdAlert, IoMdCheckmarkCircleOutline } from 'react-icons/io';

import { AlertVariant } from '@/enums';

export const alertVariantStyle = {
  [AlertVariant.Success]: {
    container: 'border-success-soft bg-success-surface text-success-text',
    icon: IoMdCheckmarkCircleOutline,
    role: 'status',
  },
  [AlertVariant.Error]: {
    container: 'border-danger-soft bg-danger-surface text-danger-text',
    icon: IoMdAlert,
    role: 'alert',
  },
} as const;
