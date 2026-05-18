import { render } from 'react-email';
import { CreateEmailResponse, Resend } from 'resend';

import { ContactEmailProps, ContactEmail, contactEmailSchema } from '@/emails';

const resend: Resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
  const parsed = contactEmailSchema.safeParse(await request.json());

  if (!parsed.success) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  const { name, email, message }: ContactEmailProps = parsed.data;
  const { error }: CreateEmailResponse = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: process.env.CREATOR_EMAIL as string,
    replyTo: email,
    subject: `Nowa wiadomość z formularza kontaktowego od ${name}`,
    html: await render(<ContactEmail email={email} message={message} name={name} />),
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ message: 'Email sent successfully' }, { status: 200 });
}
