export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-beige-dark">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Contact</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Vous avez un projet en t&ecirc;te&nbsp;? Parlons-en autour d&apos;un caf&eacute;
          &agrave; Montpellier, ou simplement par message.
        </p>

        <div className="mt-10 max-w-md">
          <form className="space-y-4" id="contact-form">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                className="w-full rounded-md border border-beige-darker dark:border-zinc-700 bg-transparent px-3 py-2 text-sm text-foreground placeholder-zinc-400 outline-none focus:border-sapin dark:focus:border-sapin transition-colors"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                className="w-full rounded-md border border-beige-darker dark:border-zinc-700 bg-transparent px-3 py-2 text-sm text-foreground placeholder-zinc-400 outline-none focus:border-sapin dark:focus:border-sapin transition-colors"
                placeholder="vous@exemple.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contact-project"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Description du projet
              </label>
              <textarea
                id="contact-project"
                name="project"
                rows={4}
                className="w-full rounded-md border border-beige-darker dark:border-zinc-700 bg-transparent px-3 py-2 text-sm text-foreground placeholder-zinc-400 outline-none focus:border-sapin dark:focus:border-sapin transition-colors resize-none"
                placeholder="D&#233;crivez bri&#232;vement votre projet..."
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-sapin px-5 py-2.5 text-sm font-medium text-white hover:bg-sapin-dark transition-colors cursor-pointer"
              id="contact-submit"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
