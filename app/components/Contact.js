export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Contact</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Replace this with your preferred contact method — a form, an email link, or an embedded
          calendar.
        </p>

        <div className="mt-10 max-w-md">
          <form className="space-y-4" id="contact-form">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors cursor-pointer"
              id="contact-submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
