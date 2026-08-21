export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">Brand &mdash; {year}</p>
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
