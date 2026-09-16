import { Figtree, Caprasimo } from 'next/font/google';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';
import { THEME_INIT_SCRIPT } from './lib/themeInit';
import { dict } from './lib/i18n';
import './globals.css';

// This site has two independent root layouts (app/(fr)/layout.js and
// app/en/layout.js), so there is no single layout to compose a global 404
// from. global-not-found.js (enabled via experimental.globalNotFound in
// next.config.mjs) exists for exactly this case: it bypasses normal
// rendering entirely and must supply its own full document, including
// fonts, the theme-init script, and the site header.

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
  title: dict.fr.notFound.pageTitle,
};

export default function GlobalNotFound() {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${figtree.variable} ${caprasimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <Header />
        <NotFoundPage lang="fr" />
      </body>
    </html>
  );
}
