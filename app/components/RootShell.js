import { Figtree, Caprasimo } from 'next/font/google';
import Header from './Header';
import { THEME_INIT_SCRIPT } from '../lib/themeInit';
import '../globals.css';

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

export default function RootShell({ lang, children }) {
  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${figtree.variable} ${caprasimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <noscript>
          <style>{'.js-reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}
