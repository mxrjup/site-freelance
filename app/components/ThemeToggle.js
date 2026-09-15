'use client';

import { SunIcon, MoonIcon } from './icons';

export default function ThemeToggle({ label }) {
  function toggle() {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // localStorage unavailable (private mode, disabled storage): theme just won't persist
    }
    window.dispatchEvent(new Event('themechange'));
  }

  return (
    <button
      type="button"
      id="theme-toggle"
      onClick={toggle}
      aria-label={label}
      className="inline-flex h-[27px] w-[27px] items-center justify-center rounded-full border border-forest/15 text-forest/70 transition-colors hover:text-forest dark:border-cream/20 dark:text-cream/70 dark:hover:text-cream"
    >
      <SunIcon className="hidden h-[15px] w-[15px] dark:block" />
      <MoonIcon className="block h-[15px] w-[15px] dark:hidden" />
    </button>
  );
}
