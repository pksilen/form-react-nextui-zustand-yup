import { Button } from '@nextui-org/react';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const SubmitButton = ({ children, className }: Props) => (
  <Button className={className} color="primary" type="submit">
    {children}
  </Button>
);
