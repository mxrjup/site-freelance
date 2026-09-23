import Footer from './Footer';
import { dict } from '../lib/i18n';

// Shared shell for the legal pages (mentions légales, politique de
// confidentialité). No BackgroundDecor and no Reveal here on purpose: these
// pages are plain text and should ship zero extra client JS.
export default function LegalLayout({ lang = 'fr', children }) {
  const t = dict[lang];
  const home = lang === 'fr' ? '/' : `/${lang}/`;

  return (
    <div className="relative flex flex-1 flex-col">
      <main className="relative mx-auto w-full max-w-[760px] flex-1 px-5 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-16">
        {children}
      </main>
      <Footer t={t.footer} hrefPrefix={home} />
    </div>
  );
}

export function LegalTitle({ children }) {
  return (
    <h1 className="text-[32px] leading-tight text-forest sm:text-[43px] dark:text-cream">
      {children}
    </h1>
  );
}

export function LegalH2({ children }) {
  return <h2 className="mt-12 text-2xl leading-tight text-forest dark:text-cream">{children}</h2>;
}

export function LegalH3({ children }) {
  return (
    <h3 className="mt-8 text-lg font-semibold leading-snug text-forest dark:text-cream">
      {children}
    </h3>
  );
}

export function LegalP({ children }) {
  return <p className="mt-4 leading-relaxed text-forest/90 dark:text-cream/80">{children}</p>;
}

export function LegalLink({ href, children }) {
  return (
    <a href={href} className="underline underline-offset-2 hover:text-leaf">
      {children}
    </a>
  );
}
