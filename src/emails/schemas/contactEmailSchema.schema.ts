import z from 'zod';

export const contactEmailSchema = z.object({
  name: z.string().min(1, 'Imię jest wymagane'),
  email: z.string().min(1, 'Adres email jest wymagany').pipe(z.email('Niepoprawny adres email')),
  message: z.string().min(1, 'Wiadomość jest wymagana'),
});
