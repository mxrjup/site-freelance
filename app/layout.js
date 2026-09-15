import { Figtree, Caprasimo } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
});

const caprasimo = Caprasimo({
  variable: '--font-caprasimo',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  authors: [{ name: 'Marius' }],
  creator: 'Marius',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${figtree.variable} ${caprasimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-forest font-sans">{children}</body>
    </html>
  );
}
