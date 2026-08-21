const offers = [
  {
    title: 'Cr\u00e9ation de site vitrine',
    description:
      'Un site sur-mesure, con\u00e7u et cod\u00e9 pour repr\u00e9senter votre activit\u00e9 en ligne.',
    features: [
      'Design \u00e9pur\u00e9 et professionnel',
      'Responsive mobile-first',
      'Optimisation SEO local (Montpellier)',
      'Performance et \u00e9co-conception',
    ],
    price: 'Prix sur devis',
    highlight: false,
  },
  {
    title: 'Pack S\u00e9r\u00e9nit\u00e9',
    description:
      "Un forfait annuel fixe pour ne plus vous soucier de la technique apr\u00e8s la mise en ligne.",
    features: [
      'Nom de domaine inclus',
      'H\u00e9bergement vert Infomaniak',
      'Maintenance et mises \u00e0 jour',
      'Sauvegardes r\u00e9guli\u00e8res',
    ],
    price: 'Forfait annuel fixe',
    highlight: true,
  },
];

export default function Offers() {
  return (
    <section id="offres" className="py-20 border-t border-beige-dark">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Mes offres</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Deux formules claires pour lancer et maintenir votre pr&eacute;sence en ligne.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {offers.map(({ title, description, features, price, highlight }) => (
            <div
              key={title}
              className={`rounded-lg border p-6 ${
                highlight ? 'border-sapin' : 'border-beige-dark'
              }`}
              id={`offer-${title.toLowerCase().replace(/\s+/g, '-').replace(/['\u00e9\u00e0]/g, 'e')}`}
            >
              {highlight && (
                <p className="text-xs font-semibold text-sapin mb-3 uppercase tracking-wide">
                  Recommand&eacute;
                </p>
              )}
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
              <ul className="mt-4 space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-sapin"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-terracotta">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
