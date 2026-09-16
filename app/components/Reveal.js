'use client';

import { useEffect, useRef, useState } from 'react';

const VARIANTS = {
  rise: 'translate-y-6',
  drop: '-translate-y-4 scale-95',
  driftLeft: '-translate-x-12 -rotate-1',
  driftRight: 'translate-x-12 rotate-1',
  bloom: 'scale-90 -rotate-3',
  grow: '-translate-x-4',
};

/**
 * Fades and slides children into place the first time they enter the
 * viewport. A light stand-in for the original scroll-choreography, built on
 * IntersectionObserver instead of a per-frame scroll listener.
 *
 * The `js-reveal` class is a hook for RootShell's <noscript> stylesheet,
 * which forces full opacity/no transform when JS never runs to flip
 * `visible`, so content isn't permanently invisible without JS.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'rise',
  delay = 0,
  className = '',
  style,
  children,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // `prefers-reduced-motion` collapses the transition duration to ~0 via
    // globals.css, so the reveal still fires here but snaps instead of animating.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`js-reveal transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100' : `opacity-0 ${VARIANTS[variant]}`} ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </Tag>
  );
}
