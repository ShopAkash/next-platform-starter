import Link from 'next/link';
import { ReactNode } from 'react';

interface MDXButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

export default function MDXButton({ 
  href, 
  variant = 'primary', 
  children, 
  className = ''
}: MDXButtonProps) {
  const baseClasses = `inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200`;
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}