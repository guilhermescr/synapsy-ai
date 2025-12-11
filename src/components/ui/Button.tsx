import type { ComponentProps } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  className,
}: ButtonProps) {
  const buttonClasses = clsx(
    'cursor-pointer flex items-center justify-center gap-2 rounded-full text-sm text-center transition',
    {
      'bg-background text-foreground font-semibold border-2 border-primary hover:bg-primary/90':
        variant === 'primary',
      'bg-transparent text-foreground hover:underline': variant === 'ghost',
    },
    {
      'px-4 py-1 text-xs': size === 'small',
      'px-6 py-2 text-sm': size === 'medium',
      'px-12 py-3 text-lg': size === 'large',
    },
    className
  );

  return <button className={buttonClasses}>{children}</button>;
}
