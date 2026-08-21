export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-beige-dark py-8">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">Marius Dev &mdash; {year}</p>
        <div className="flex items-center gap-6">
          <a href="#avantages" className="text-sm text-zinc-500 hover:text-sapin transition-colors">
            Avantages
          </a>
          <a href="#offres" className="text-sm text-zinc-500 hover:text-sapin transition-colors">
            Offres
          </a>
          <a href="#contact" className="text-sm text-zinc-500 hover:text-sapin transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
