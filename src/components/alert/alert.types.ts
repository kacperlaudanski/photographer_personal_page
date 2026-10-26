import { AlertVariant } from '@/enums';

export interface AlertProps {
  title: string;
  message: string;
  variant: AlertVariant;
  onClose: () => void;
  autoHideDuration?: number;
}
