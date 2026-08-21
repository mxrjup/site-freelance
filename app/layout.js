import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: 'Brand — Modern Business Website',
    template: '%s | Brand',
  },
  description:
    'A blazing-fast, database-free business website built with Next.js and Tailwind CSS. Static export, auto-deployed to Infomaniak.',
  keywords: ['Next.js', 'Tailwind CSS', 'Static Site', 'Business Website'],
  authors: [{ name: 'Brand Team' }],
  creator: 'Brand',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Brand — Modern Business Website',
    description:
      'A blazing-fast, database-free business website built with Next.js and Tailwind CSS.',
    url: '/',
    siteName: 'Brand',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand — Modern Business Website',
    description:
      'A blazing-fast, database-free business website built with Next.js and Tailwind CSS.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
