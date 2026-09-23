import { Figtree, Caprasimo } from 'next/font/google';
import Analytics from './components/Analytics';
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

// The static export only ever produces one physical 404.html, served by the
// host for any unmatched URL — so there's no per-request routing to tell
// this page whether it was reached from a /en/... path. This script (same
// "correct it client-side" approach as THEME_INIT_SCRIPT) reads the actual
// browser pathname after load and swaps the French copy for English when
// needed, sourced from the same dict.en.notFound used everywhere else. It
// runs after Header/NotFoundPage (not before, like THEME_INIT_SCRIPT) since
// it needs their elements to already exist in the DOM, and those elements
// carry suppressHydrationWarning so React's hydration doesn't revert the
// swap back to French. `document.title` isn't touched: Next's own metadata
// system re-syncs it after hydration regardless, so a script-side title
// fix wouldn't stick — a cosmetic, non-indexed detail not worth chasing.
const { h1, description, cta } = dict.en.notFound;
const NOT_FOUND_EN = { h1, description, cta };
const NOT_FOUND_LANG_SCRIPT = `(function(){try{if(location.pathname.indexOf('/en')===0){document.documentElement.lang='en';var t=${JSON.stringify(NOT_FOUND_EN)};var h1=document.getElementById('not-found-h1');if(h1)h1.textContent=t.h1;var d=document.getElementById('not-found-description');if(d)d.textContent=t.description;var c=document.getElementById('not-found-home-link');if(c){c.textContent=t.cta;c.setAttribute('href','/en/');}}}catch(e){}})();`;

export default function GlobalNotFound() {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${figtree.variable} ${caprasimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <Header lang="fr" />
        <NotFoundPage lang="fr" />
        <script dangerouslySetInnerHTML={{ __html: NOT_FOUND_LANG_SCRIPT }} />
        <Analytics />
      </body>
    </html>
  );
}
