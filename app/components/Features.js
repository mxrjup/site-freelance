const features = [
  {
    title: 'Feature one',
    description: 'A brief explanation of what this feature does and why it matters to your users.',
  },
  {
    title: 'Feature two',
    description: 'A brief explanation of what this feature does and why it matters to your users.',
  },
  {
    title: 'Feature three',
    description: 'A brief explanation of what this feature does and why it matters to your users.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Features
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Replace these cards with your own content.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6"
              id={`feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{title}</h3>
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
