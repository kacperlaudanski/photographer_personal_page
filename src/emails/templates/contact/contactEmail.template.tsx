import React, { JSX } from 'react';
import { Heading, Hr, Html, Text } from 'react-email';

import { ContactEmailProps } from '@/emails/interfaces';

export const ContactEmail: React.FC<ContactEmailProps> = (props: ContactEmailProps): JSX.Element => {
  const { name, email, message }: ContactEmailProps = props;

  return (
    <Html>
      <Heading>Nowa wiadomość z formularza kontaktowego od {name}</Heading>
      <Text>Od: {email}</Text>
      <Hr />
      <Text>{message}</Text>
    </Html>
  );
};
