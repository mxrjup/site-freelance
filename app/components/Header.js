'use client';

import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { label: 'Pourquoi moi', href: '#atouts' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Offres', href: '#offres' },
  { label: 'Questions', href: '#questions' },
];

export default function Header() {
  const headerRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      // dead zone at the very top: no glass at all until the page starts moving
      const g = Math.max(0, Math.min(1, (y - 40) / 130));
      header.style.background = `rgba(233,223,199,${(1 - 0.34 * g).toFixed(3)})`;
      const lens = `blur(${(14 * g).toFixed(1)}px) saturate(${(1 + 0.85 * g).toFixed(2)})`;
      header.style.backdropFilter = lens;
      header.style.webkitBackdropFilter = lens;
      header.style.boxShadow =
        g < 0.02
          ? 'none'
          : `0 ${(10 * g).toFixed(1)}px ${(26 * g).toFixed(1)}px -${(16 * g).toFixed(1)}px rgba(61,90,36,${(0.45 * g).toFixed(3)})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-cream-header">
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between gap-8 px-5 py-[18px] sm:px-10">
        <a
          href="#hero"
          id="header-logo"
          className="flex items-center gap-2.5 font-display text-xl text-forest"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-[60%_40%_55%_45%/50%_55%_45%_50%] bg-sage">
            <LeafIcon className="h-[18px] w-[18px]" />
          </span>
          Marius Dev
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  id={`nav-${label.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                  className="text-[15px] font-medium text-forest/70 transition-colors hover:text-leaf"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            id="header-cta"
            className="rounded-full bg-leaf px-[22px] py-[11px] text-[15px] font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_18px_32px_-18px_rgba(61,90,36,0.7)]"
          >
            Me contacter
          </a>
        </div>

        <button
          type="button"
          id="mobile-menu-toggle"
          className="md:hidden p-2 text-forest"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <ul className="md:hidden flex flex-col gap-1 border-t border-forest/10 bg-cream-header px-5 py-4">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-[15px] font-medium text-forest/80 hover:text-leaf"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-block rounded-full bg-leaf px-5 py-2.5 text-[15px] font-semibold text-white"
            >
              Me contacter
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

function LeafIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="#3D5A24"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
