import { AlertVariant } from '@/enums';

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export interface AlertState {
  variant: AlertVariant;
  title: string;
  message: string;
}
