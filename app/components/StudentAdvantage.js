const advantages = [
  {
    title: 'Rigueur technique',
    description:
      'Formation d’ingénieur à Polytech Montpellier : chaque projet est abordé avec méthode, de l’analyse du besoin à la livraison finale.',
    icon: 'M9 4.5h6a1 1 0 011 1V6h1.5A1.5 1.5 0 0119 7.5v11A1.5 1.5 0 0117.5 20h-11A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6H8V5.5a1 1 0 011-1z M8.5 12.5l2 2 4-4',
  },
  {
    title: 'Technologies modernes',
    description:
      'Maîtrise des frameworks et outils les plus récents (Next.js, React, Tailwind CSS). Votre site bénéficie des meilleures pratiques du web actuel.',
    icon: 'M8.25 8.25 4.5 12l3.75 3.75M15.75 8.25 19.5 12l-3.75 3.75M13.5 6l-3 12',
  },
  {
    title: 'Code sur-mesure',
    description:
      'Pas d’assemblage de templates : chaque ligne de code est écrite pour votre projet. Le résultat est un site rapide, léger et maintenable.',
    icon: 'M16.862 4.487a2.06 2.06 0 1 1 2.914 2.914L7.5 19.677l-4 1 1-4L16.862 4.487z',
  },
];

export default function StudentAdvantage() {
  return (
    <section id="avantages" className="py-20 border-t border-beige-dark">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          L&apos;avantage &eacute;tudiant ing&eacute;nieur
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Je ne fais pas d&apos;assemblage. Je code des solutions performantes et modernes, avec la
          rigueur d&apos;une formation d&apos;ing&eacute;nieur.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {advantages.map(({ title, description, icon }) => (
            <div
              key={title}
              className="rounded-lg border border-beige-dark p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              id={`advantage-${title.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-beige-dark dark:bg-zinc-800">
                <svg
                  className="h-5 w-5 text-sapin"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
