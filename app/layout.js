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
  title: {
    default: 'Marius — Développeur web freelance à Montpellier',
    template: '%s | Marius Dev',
  },
  description:
    'Étudiant ingénieur à Polytech Montpellier, je crée des sites vitrines éco-responsables, performants et hébergés sur des serveurs verts Infomaniak.',
  keywords: [
    'développeur web freelance Montpellier',
    'création site vitrine',
    'éco-conception web',
    'hébergement écologique',
    'site web Montpellier',
  ],
  authors: [{ name: 'Marius' }],
  creator: 'Marius',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Marius — Développeur web freelance à Montpellier',
    description:
      'Sites vitrines sur-mesure, éco-responsables et hébergés sur des serveurs verts. Étudiant ingénieur à Polytech Montpellier.',
    url: '/',
    siteName: 'Marius Dev',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marius — Développeur web freelance à Montpellier',
    description: 'Sites vitrines sur-mesure, éco-responsables et hébergés sur des serveurs verts.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${figtree.variable} ${caprasimo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-forest font-sans">{children}</body>
    </html>
  );
}
