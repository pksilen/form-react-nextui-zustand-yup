import { Input } from '@nextui-org/react';
import { clsx } from 'clsx';
import React from 'react';

export type TextInputProps = Readonly<{
  className?: string;
  error?: string | null | undefined;
  label?: string;
  maxLength?: number | undefined;
  required?: boolean;
}>;

export const TextInput = React.forwardRef(
  ({ className, error, label, maxLength, required, ...restOfProps }: TextInputProps, ref) => (
    <Input
      className={clsx('max-w-xs', className)}
      errorMessage={error}
      isInvalid={!!error}
      label={required ? `${label} *` : label}
      maxLength={maxLength}
      required={required}
      variant="bordered"
      {...restOfProps}
    />
  )
);
