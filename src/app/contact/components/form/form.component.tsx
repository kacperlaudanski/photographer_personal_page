import { zodResolver } from '@hookform/resolvers/zod';
import { Alert } from '@mui/material';
import clsx from 'clsx';
import React, { JSX, MouseEvent, useState } from 'react';
import { Controller, useForm, UseFormReturn } from 'react-hook-form';

import { AlertState, ControllerProps, FormValues } from './form.types';
import { contactEmailSchema } from '@/emails';

export const Form: React.FC = (): JSX.Element => {
  const { control, handleSubmit, formState: { errors }, reset }: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: { name: '', email: '', message: '' },
    resolver: zodResolver(contactEmailSchema),
  });
  const [alert, setAlert] = useState<AlertState| null>(null);

  const onSubmit: (data: FormValues) => Promise<void> = async (data: FormValues): Promise<void> => {
    const res: Response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      setAlert({ severity: 'error', message: 'Coś poszło nie tak. Spróbuj ponownie.' });

      return;
    }

    setAlert({ severity: 'success', message: 'Wiadomość została wysłana!' });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-4'>
        {alert && (
          <Alert severity={alert.severity} onClose={() => setAlert(null)}>
            {alert.message}
          </Alert>
        )}
        <div className='flex gap-4'>
          <Controller
            control={control}
            name='name'
            render={({ field }: ControllerProps<'name'>): JSX.Element => (
              <div className='flex flex-col flex-1 gap-1'>
                <label className='text-[10px] font-semibold tracking-widest text-gray-500'>
                  IMIĘ
                </label>
                <input
                  {...field}
                  className={clsx(
                    'h-11 rounded-md border px-3 text-xs placeholder:text-gray-300',
                    errors.name ? 'border-red-600' : 'border-gray-300'
                  )}
                  placeholder='Jan'
                  type='text'
                />
                {errors.name && (
                  <p className='text-red-600 text-[10px]'>{errors.name.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            control={control}
            name='email'
            render={({ field }: ControllerProps<'email'>): JSX.Element => (
              <div className='flex flex-col flex-1 gap-1'>
                <label className='text-[10px] font-semibold tracking-widest text-gray-500'>
                  EMAIL
                </label>
                <input
                  {...field}
                  className={clsx(
                    'h-11 rounded-md border px-3 text-xs placeholder:text-gray-300',
                    errors.email ? 'border-red-600' : 'border-gray-300'
                  )}
                  placeholder='jankowalski@email.pl'
                  type='text'
                />
                {errors.email && (
                  <p className='text-red-600 text-[10px]'>{errors.email.message}</p>
                )}
              </div>
            )}
          />
        </div>
        <Controller
          control={control}
          name='message'
          render={({ field }: ControllerProps<'message'>) => (
            <div className='flex flex-col flex-1 gap-1'>
              <label className='text-[10px] font-semibold tracking-widest text-gray-500'>
                WIADOMOŚĆ
              </label>
              <textarea
                {...field}
                className={clsx(
                  'rounded-md border h-20 p-3 text-xs placeholder:text-gray-300',
                  errors.message ? 'border-red-600' : 'border-gray-300'
                )}
                placeholder='Wpisz wiadomość...'
              />
              {errors.message && (
                <p className='text-red-600 text-[10px]'>{errors.message.message}</p>
              )}
            </div>
          )}
        />
        {/* TODO: fix styling */}
        <button
          className='w-full md:w-auto md:self-start h-11 px-3 text-sm text-white rounded-md cursor-pointer mt-4'
          onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundPosition = 'right')}
          onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundPosition = 'left')}
          style={{
            background: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899, #3b82f6)',
            backgroundSize: '200% 100%',
            backgroundPosition: 'left',
            transition: 'background-position 0.5s ease',
          }}
          type='submit'
        >
          Wyślij wiadomość
        </button>
      </div>
    </form>
  );
};
