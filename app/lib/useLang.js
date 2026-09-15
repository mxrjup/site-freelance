'use client';

import { usePathname } from 'next/navigation';

export function useLang() {
  const pathname = usePathname();
  return pathname.startsWith('/en') ? 'en' : 'fr';
}
