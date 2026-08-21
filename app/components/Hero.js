export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Cr&eacute;ation de sites web &eacute;co-responsables &agrave; Montpellier
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
          &Eacute;tudiant &agrave; Polytech Montpellier, je con&ccedil;ois votre site vitrine de A
          &agrave; Z avec les derni&egrave;res technologies, de la premi&egrave;re ligne de code
          &agrave; l&apos;h&eacute;bergement vert.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block rounded-md bg-sapin px-6 py-3 text-sm font-medium text-white hover:bg-sapin-dark transition-colors"
            id="hero-cta"
          >
            Me parler de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}
