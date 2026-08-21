export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Your headline goes here
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A short description of what your business does. Replace this with your own copy. Keep it
          clear and concise.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors"
            id="hero-cta-primary"
          >
            Get started
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            id="hero-cta-secondary"
          >
            Learn more &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
