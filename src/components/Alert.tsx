import { ReactNode } from 'react';
import { Alert as ShadcnAlert, AlertDescription } from '@/components/ui/alert';
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AlertProps {
  type: 'info' | 'warning' | 'success' | 'error';
  children: ReactNode;
}

const alertConfig = {
  info: {
    icon: Info,
    className: 'border-blue-200 bg-blue-50 text-blue-800',
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-yellow-200 bg-yellow-50 text-yellow-800',
  },
  success: {
    icon: CheckCircle,
    className: 'border-green-200 bg-green-50 text-green-800',
  },
  error: {
    icon: XCircle,
    className: 'border-red-200 bg-red-50 text-red-800',
  },
};

export default function Alert({ type, children }: AlertProps) {
  const config = alertConfig[type];
  const Icon = config.icon;

  return (
    <ShadcnAlert className={cn('my-4', config.className)}>
      <Icon className="h-4 w-4" />
      <AlertDescription className="ml-2">
        {children}
      </AlertDescription>
    </ShadcnAlert>
  );
}