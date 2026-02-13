'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';
import { Loader2 } from 'lucide-react';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  disabled = false,
  loading = false,
  className,
  type = 'button',
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-300',
    'rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'relative overflow-hidden'
  );

  const variants = {
    primary: cn(
      'bg-accent text-white',
      'hover:bg-accent/90 hover:shadow-glow',
      'active:scale-[0.98]'
    ),
    secondary: cn(
      'bg-accent2 text-white',
      'hover:bg-accent2/90 hover:shadow-glow',
      'active:scale-[0.98]'
    ),
    outline: cn(
      'border-2 border-accent text-accent bg-transparent',
      'hover:bg-accent hover:text-white',
      'active:scale-[0.98]'
    ),
    ghost: cn(
      'text-foreground hover:bg-muted',
      'active:scale-[0.98]'
    ),
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (loading) {
    return (
      <button
        type={type}
        disabled
        className={buttonClasses}
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Yükleniyor...
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}
