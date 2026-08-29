import Link from 'next/link';

export const metadata = {
  title: 'Page introuvable',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Page introuvable
      </h1>
      <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        La page que vous recherchez n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-sapin px-4 py-2 text-sm font-medium text-white hover:bg-sapin-dark transition-colors"
        id="not-found-home-link"
      >
        Retour &agrave; l&apos;accueil
      </Link>
    </main>
  );
}
