import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// Map old variants to new shadcn variants
const variantMap = {
  primary: 'default' as const,
  secondary: 'secondary' as const,
};

export default function Button({ 
  href, 
  onClick, 
  variant = 'primary', 
  children, 
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  const shadcnVariant = variantMap[variant];

  if (href) {
    return (
      <ShadcnButton variant={shadcnVariant} className={className} asChild>
        <a href={href}>
          {children}
        </a>
      </ShadcnButton>
    );
  }

  return (
    <ShadcnButton 
      onClick={onClick} 
      variant={shadcnVariant}
      className={className}
      type={type}
      disabled={disabled}
    >
      {children}
    </ShadcnButton>
  );
}