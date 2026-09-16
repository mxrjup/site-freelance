'use client';

import { SunIcon, MoonIcon } from './icons';

export default function ThemeToggle({ label, idPrefix }) {
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
      id={`theme-toggle-${idPrefix}`}
      onClick={toggle}
      aria-label={label}
      className="relative inline-flex h-[27px] w-[27px] cursor-pointer items-center justify-center rounded-full border border-forest/15 text-forest/70 transition-colors hover:text-forest dark:border-cream/20 dark:text-cream/70 dark:hover:text-cream"
    >
      <SunIcon className="absolute h-[15px] w-[15px] rotate-0 opacity-100 transition-[opacity,transform] duration-300 ease-out dark:-rotate-90 dark:opacity-0" />
      <MoonIcon className="absolute h-[15px] w-[15px] rotate-90 opacity-0 transition-[opacity,transform] duration-300 ease-out dark:rotate-0 dark:opacity-100" />
    </button>
  );
}
