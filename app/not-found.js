import Link from 'next/link';

export const metadata = {
  title: 'Page introuvable',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center dark:bg-night">
      <p className="text-sm font-medium text-forest/60 dark:text-cream/60">404</p>
      <h1 className="mt-2 text-3xl text-forest sm:text-4xl dark:text-cream">Page introuvable</h1>
      <p className="mt-4 text-sm leading-6 text-forest/70 dark:text-cream/70">
        La page que vous recherchez n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest"
        id="not-found-home-link"
      >
        Retour &agrave; l&apos;accueil
      </Link>
    </main>
  );
}
