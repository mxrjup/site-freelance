const commitments = [
  {
    title: 'H\u00e9bergement 100\u00a0% vert',
    description:
      "Vos sites sont h\u00e9berg\u00e9s chez Infomaniak, aliment\u00e9s \u00e0 100\u00a0% par des \u00e9nergies renouvelables. Les donn\u00e9es restent en Europe, dans des datacenters certifi\u00e9s.",
  },
  {
    title: 'Code optimis\u00e9',
    description:
      "Chaque page est con\u00e7ue pour \u00eatre la plus l\u00e9g\u00e8re possible : pas de scripts inutiles, pas d\u2019images surdimensionn\u00e9es, des performances maximales.",
  },
  {
    title: 'Exp\u00e9rience terrain',
    description:
      "J\u2019ai r\u00e9alis\u00e9 un stage chez Infomaniak en 2026, au c\u0153ur de leur infrastructure \u00e9cologique. Je connais leurs outils et leurs bonnes pratiques de l\u2019int\u00e9rieur.",
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
          {commitments.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-beige-dark p-6"
              id={`eco-${title.toLowerCase().replace(/\s+/g, '-').replace(/['\u2019%\u00a0]/g, '')}`}
            >
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
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
