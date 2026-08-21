'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold text-zinc-900 dark:text-white"
          id="header-logo"
        >
          Brand
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                id={`nav-${label.toLowerCase()}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="mobile-menu-toggle"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden border-t border-zinc-200 dark:border-zinc-800 px-6 py-4 space-y-3">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
