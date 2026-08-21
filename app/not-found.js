import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors"
        id="not-found-home-link"
      >
        Go back home
      </Link>
    </main>
  );
}
