import type { Metadata } from 'next';
import { Raleway, Inter } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Synapsy AI',
  description:
    'AI-powered platform to enhance your productivity and creativity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${raleway.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
