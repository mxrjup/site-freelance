import Link from 'next/link';
import { dict } from '../lib/i18n';

export default function NotFoundPage({ lang }) {
  const t = dict[lang].notFound;
  const home = lang === 'fr' ? '/' : `/${lang}/`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center dark:bg-night">
      <p className="text-sm font-medium text-forest/60 dark:text-cream/60">404</p>
      <h1 className="mt-2 text-3xl text-forest sm:text-4xl dark:text-cream">{t.h1}</h1>
      <p className="mt-4 text-sm leading-6 text-forest/70 dark:text-cream/70">{t.description}</p>
      <Link
        href={home}
        className="mt-8 rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest"
        id="not-found-home-link"
      >
        {t.cta}
      </Link>
    </main>
  );
}
