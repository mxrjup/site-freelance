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
    default: 'Marius \u2014 D\u00e9veloppeur web freelance \u00e0 Montpellier',
    template: '%s | Marius Dev',
  },
  description:
    '\u00c9tudiant ing\u00e9nieur \u00e0 Polytech Montpellier, je cr\u00e9e des sites vitrines \u00e9co-responsables, performants et h\u00e9berg\u00e9s sur des serveurs verts Infomaniak.',
  keywords: [
    'd\u00e9veloppeur web freelance Montpellier',
    'cr\u00e9ation site vitrine',
    '\u00e9co-conception web',
    'h\u00e9bergement \u00e9cologique',
    'site web Montpellier',
  ],
  authors: [{ name: 'Marius' }],
  creator: 'Marius',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Marius \u2014 D\u00e9veloppeur web freelance \u00e0 Montpellier',
    description:
      'Sites vitrines sur-mesure, \u00e9co-responsables et h\u00e9berg\u00e9s sur des serveurs verts. \u00c9tudiant ing\u00e9nieur \u00e0 Polytech Montpellier.',
    url: '/',
    siteName: 'Marius Dev',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marius \u2014 D\u00e9veloppeur web freelance \u00e0 Montpellier',
    description:
      'Sites vitrines sur-mesure, \u00e9co-responsables et h\u00e9berg\u00e9s sur des serveurs verts.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
