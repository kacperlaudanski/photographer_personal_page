import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Alert } from '@/components';
import { contactEmailSchema } from '@/emails';
import { AlertVariant, CursorVariant } from '@/enums';

import { AlertState, FormValues } from './form.types';

export const Form = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { name: '', email: '', message: '' },
    resolver: zodResolver(contactEmailSchema),
  });
  const [alert, setAlert] = useState<AlertState | null>(null);

  const onSubmit = async (data: FormValues) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      setAlert({ variant: AlertVariant.Error, title: 'Wystąpił błąd', message: 'Coś poszło nie tak. Spróbuj ponownie.' });

      return;
    }

    setAlert({ variant: AlertVariant.Success, title: 'Wiadomość wysłana pomyślnie', message: 'Wiadomość została wysłana!' });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-96 z-60'>
        <AnimatePresence>
          {!!alert && (
            <Alert
              autoHideDuration={5000}
              message={alert.message}
              onClose={() => setAlert(null)}
              title={alert.title}
              variant={alert.variant}
            />
          )}
        </AnimatePresence>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <Controller
            control={control}
            name='name'
            render={({ field }) => (
              <div className='flex flex-col flex-1 gap-2'>
                <label className='flex items-center gap-2 text-[14px] font-semibold font-mono tracking-widest text-subtle'>
                  <span className='text-faint'>—</span>
                  IMIĘ
                </label>
                <input
                  {...field}
                  data-cursor={CursorVariant.Text}
                  className={clsx(
                    'h-11 border-b px-3 text-sm placeholder:text-xl placeholder:text-faint placeholder:font-handwrite bg-transparent focus:outline-none transition-colors duration-200',
                    errors.name ? 'border-danger-soft focus:border-danger-soft' : 'border-faint focus:border-focus'
                  )}
                  placeholder='Jan'
                  type='text'
                />
                {errors.name && (
                  <p className='text-danger text-[10px]'>{errors.name.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            control={control}
            name='email'
            render={({ field }) => (
              <div className='flex flex-col flex-1 gap-2'>
                <label className='flex items-center gap-2 text-[14px] font-jet-brains font-semibold font-mono tracking-widest text-subtle'>
                  <span className='text-faint'>—</span>
                  EMAIL
                </label>
                <input
                  {...field}
                  data-cursor={CursorVariant.Text}
                  className={clsx(
                    'h-11 border-b px-3 text-sm placeholder:text-xl placeholder:text-faint placeholder:font-handwrite bg-transparent focus:outline-none transition-colors duration-200',
                    errors.name ? 'border-danger-soft focus:border-danger-soft' : 'border-faint focus:border-focus'
                  )}
                  placeholder='jankowalski@email.pl'
                  type='text'
                />
                {errors.email && (
                  <p className='text-danger text-[10px]'>{errors.email.message}</p>
                )}
              </div>
            )}
          />
        </div>
        <Controller
          control={control}
          name='message'
          render={({ field }) => (
            <div className='flex flex-col flex-1 gap-2'>
              <label className='flex items-center gap-2 text-[14px] font-jet-brains font-semibold font-mono tracking-widest text-subtle'>
                <span className='text-faint'>—</span>
                WIADOMOŚĆ
              </label>
              <textarea
                {...field}
                data-cursor={CursorVariant.Text}
                className={clsx(
                  'h-24 border-b px-3 text-sm placeholder:text-xl placeholder:text-faint placeholder:font-handwrite bg-transparent focus:outline-none transition-colors duration-200',
                  errors.name ? 'border-danger-soft focus:border-danger-soft' : 'border-faint focus:border-focus'
                )}
                placeholder='Wpisz wiadomość...'
              />
              {errors.message && (
                <p className='text-danger text-[10px]'>{errors.message.message}</p>
              )}
            </div>
          )}
        />
        <button
          className='w-full md:w-auto md:self-start h-12 px-8 text-sm font-semibold font-body text-on-accent rounded-full cursor-pointer mt-4 flex justify-center items-center gap-3 bg-gradient-brand'
          data-cursor={CursorVariant.Link}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = 'right')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = 'left')}
          type='submit'
        >
          Wyślij wiadomość
        </button>
      </div>
    </form>
  );
};
