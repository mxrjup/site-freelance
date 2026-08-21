const advantages = [
  {
    title: 'Rigueur technique',
    description:
      "Formation d\u2019ing\u00e9nieur \u00e0 Polytech Montpellier : chaque projet est abord\u00e9 avec m\u00e9thode, de l\u2019analyse du besoin \u00e0 la livraison finale.",
  },
  {
    title: 'Technologies modernes',
    description:
      "Ma\u00eetrise des frameworks et outils les plus r\u00e9cents (Next.js, React, Tailwind CSS). Votre site b\u00e9n\u00e9ficie des meilleures pratiques du web actuel.",
  },
  {
    title: 'Code sur-mesure',
    description:
      "Pas d\u2019assemblage de templates : chaque ligne de code est \u00e9crite pour votre projet. Le r\u00e9sultat est un site rapide, l\u00e9ger et maintenable.",
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
          {advantages.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-beige-dark p-6"
              id={`advantage-${title.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
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
