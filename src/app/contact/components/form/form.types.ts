import { ControllerRenderProps } from 'react-hook-form';

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export interface ControllerProps<T extends keyof FormValues> {
  field: ControllerRenderProps<FormValues, T>;
}

export interface AlertState {
  severity: 'success' | 'error';
  message: string;
}
