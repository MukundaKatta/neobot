import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeoBot - Consumer Robot Companion',
  description: 'Your intelligent home companion robot',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0f0a14] text-gray-100 antialiased">{children}</body>
    </html>
  );
}
