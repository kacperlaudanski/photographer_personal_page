export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export interface AlertState {
  severity: 'success' | 'error';
  message: string;
}
