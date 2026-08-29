const commitments = [
  {
    title: 'Hébergement 100 % vert',
    description:
      'Vos sites sont hébergés chez Infomaniak, alimentés à 100 % par des énergies renouvelables. Les données restent en Europe, dans des datacenters certifiés.',
    icon: 'M5 21c0-6 3-13 14-16-1 8-6 13-14 16z M5 21c2-3 5-6 9-9',
  },
  {
    title: 'Code optimisé',
    description:
      'Chaque page est conçue pour être la plus légère possible : pas de scripts inutiles, pas d’images surdimensionnées, des performances maximales.',
    icon: 'M13 3 4 14h6l-1 7 9-11h-6l1-7z',
  },
  {
    title: 'Expérience terrain',
    description:
      'J’ai réalisé un stage de 4 mois en tant que développeur chez Infomaniak en 2026, au cœur de leur infrastructure écologique. Je connais leurs outils et leurs bonnes pratiques de l’intérieur.',
    icon: 'M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-9z M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7 M4 12h16',
  },
];

export default function EcoHosting() {
  return (
    <section id="engagement" className="py-20 border-t border-beige-dark">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Engagement &eacute;cologique et h&eacute;bergement
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          L&apos;&eacute;co-conception n&apos;est pas qu&apos;un argument commercial. C&apos;est une
          d&eacute;marche concr&egrave;te, de la premi&egrave;re ligne de code jusqu&apos;au choix
          du serveur.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {commitments.map(({ title, description, icon }) => (
            <div
              key={title}
              className="rounded-lg border border-beige-dark p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              id={`eco-${title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/['’% ]/g, '')}`}
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
