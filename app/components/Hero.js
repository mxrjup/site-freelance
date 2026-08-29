export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-sapin">
              D&eacute;veloppeur web freelance &agrave; Montpellier
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Cr&eacute;ation de sites web &eacute;co-responsables
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
              &Eacute;tudiant &agrave; Polytech Montpellier, je con&ccedil;ois votre site de A
              &agrave; Z avec les derni&egrave;res technologies, de la premi&egrave;re ligne de code
              &agrave; l&apos;h&eacute;bergement vert.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="inline-block rounded-md bg-sapin px-6 py-3 text-sm font-medium text-white hover:bg-sapin-dark transition-colors"
                id="hero-cta"
              >
                Me parler de votre projet
              </a>
              <a
                href="#offres"
                className="inline-block rounded-md border border-beige-darker px-6 py-3 text-sm font-medium text-foreground hover:border-sapin dark:border-zinc-700 dark:hover:border-sapin transition-colors"
                id="hero-offers-link"
              >
                Voir les offres
              </a>
            </div>
          </div>

          <div
            className="flex aspect-square w-44 shrink-0 items-center justify-center rounded-full border border-beige-darker bg-beige-dark sm:w-56 dark:border-zinc-700 dark:bg-zinc-900"
            role="img"
            aria-label="Photo de Marius &agrave; ajouter"
            id="hero-photo-placeholder"
          >
            <svg
              className="h-16 w-16 text-zinc-400 sm:h-20 sm:w-20 dark:text-zinc-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.964 0a9 9 0 10-11.964 0m11.964 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
