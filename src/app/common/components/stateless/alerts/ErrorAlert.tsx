import { clsx } from 'clsx';
import React from 'react';
import { ErrorIcon } from '../icons/ErrorIcon';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const ErrorAlert = ({ children, className }: Props) => (
  <div
    className={clsx(
      'flex w-full items-center justify-center gap-4   bg-red-500 p-3 text-white',
      className
    )}
  >
    <ErrorIcon />
    <div className="flex-grow">{children}</div>
  </div>
);
