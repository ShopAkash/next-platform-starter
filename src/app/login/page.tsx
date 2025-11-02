import LoginPageContent from '@/components/LoginPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login - Secure Access to Brocan Dashboard',
  description: 'Secure admin login portal for Brocan retail management system. Access your dashboard to manage inventory, sales, and business operations.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Admin Login - Brocan Dashboard Access',
    description: 'Secure login portal for Brocan retail management system administrators.',
    type: 'website',
  },
  alternates: {
    canonical: '/login',
  },
};

export default function LoginPage() {
  return <LoginPageContent />;
}