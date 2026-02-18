import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Hiring — Stape',
  description:
    'Hire the best contractors worldwide — regardless of timezone. Stape handles contracts, compliance, and payroll in 242 countries. Book a demo.',
  openGraph: {
    title: 'Global Hiring — Stape',
    description:
      'Hire the best contractors worldwide — regardless of timezone. Stape handles contracts, compliance, and payroll in 242 countries.',
  },
};

export default function GlobalHiringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
