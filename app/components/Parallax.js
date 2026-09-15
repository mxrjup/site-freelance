'use client';

import { useEffect, useRef } from 'react';

/**
 * Nudges its children vertically as the page scrolls, based on how far the
 * element sits from the viewport's center — the same subtle depth effect
 * used on the project preview images.
 */
export default function Parallax({ amount, className, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = null;
    const update = () => {
      raf = null;
      const vh = window.innerHeight || 800;
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const c = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.transform = `translate3d(0, ${(c * -amount).toFixed(2)}px, 0)`;
    };
    const onMove = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onMove, { passive: true });
    window.addEventListener('resize', onMove);
    update();

    return () => {
      window.removeEventListener('scroll', onMove);
      window.removeEventListener('resize', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [amount]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
