'use client';

import { useEffect, useRef } from 'react';

const SECTION_IDS = ['atouts', 'engagement', 'realisations', 'offres', 'questions', 'contact'];

// sage -> green -> terracotta, walked as the page advances
const STOPS = [
  [0, [201, 222, 169]],
  [0.4, [123, 172, 96]],
  [0.72, [75, 139, 59]],
  [1, [45, 74, 27]],
];

const RAIL_ICON_PATHS = [
  [
    'M7 20h10',
    'M10 20c5.5-2.5.8-6.4 3-10',
    'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z',
    'M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z',
  ],
  [
    'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z',
    'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12',
  ],
  null, // rectangles, handled separately below
  [
    'M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z',
  ],
  ['M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', 'M12 17h.01'],
  [
    'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
    'm21.854 2.147-10.94 10.939',
  ],
];

function mix(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function colorAt(p) {
  for (let i = 1; i < STOPS.length; i++) {
    if (p <= STOPS[i][0] || i === STOPS.length - 1) {
      const t = Math.max(0, Math.min(1, (p - STOPS[i - 1][0]) / (STOPS[i][0] - STOPS[i - 1][0])));
      const a = STOPS[i - 1][1];
      const b = STOPS[i][1];
      return `rgb(${mix(a[0], b[0], t)},${mix(a[1], b[1], t)},${mix(a[2], b[2], t)})`;
    }
  }
  return 'rgb(75,139,59)';
}

/**
 * A vertical rail running alongside the "atouts" -> "contact" sections, with
 * a ball that walks down as the visitor scrolls, tinting toward forest green
 * and swapping its glyph to match the section in view.
 */
export default function ScrollProgressRail() {
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const ballRef = useRef(null);
  const skinRef = useRef(null);
  const ringRef = useRef(null);
  const glyphRefs = useRef([]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const track = trackRef.current;
    if (!track || reduced) return;

    let current = 0;
    let target = 0;
    let raf = null;
    let shownIcon = -1;
    let sectionTops = [];
    let measuredAt = 0;

    const measure = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      sectionTops = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + y : Infinity;
      });
      measuredAt = performance.now();
    };

    const sectionIndex = (docY) => {
      let idx = 0;
      for (let i = 0; i < sectionTops.length; i++) {
        if (docY >= sectionTops[i] - 40) idx = i;
      }
      return idx;
    };

    const progress = () => {
      const doc = document.documentElement;
      const y = window.scrollY || doc.scrollTop || 0;
      const r = track.getBoundingClientRect();
      const anchor = (window.innerHeight || 800) * 0.42;
      const top = r.top + y;
      const maxScroll = Math.max(1, doc.scrollHeight - (window.innerHeight || 800));
      const start = top - anchor;
      const end = Math.min(top + r.height - anchor, maxScroll);
      if (end <= start) return y >= maxScroll - 1 ? 1 : 0;
      return Math.max(0, Math.min(1, (y - start) / (end - start)));
    };

    const paint = () => {
      const h = track.offsetHeight;
      const p = current;
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${p.toFixed(5)})`;
      if (ballRef.current)
        ballRef.current.style.transform = `translate3d(0, ${(p * h).toFixed(2)}px, 0)`;
      const skin = skinRef.current;
      if (!skin) return;
      skin.style.background = colorAt(p);
      const t = Math.max(0, Math.min(1, (p - 0.4) / 0.12));
      skin.style.color = `rgb(${mix(61, 255, t)},${mix(90, 255, t)},${mix(36, 255, t)})`;

      if (!measuredAt || performance.now() - measuredAt > 900) measure();
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const docY = track.getBoundingClientRect().top + scrollY + p * h;
      const idx = sectionIndex(docY);
      if (idx !== shownIcon) {
        if (shownIcon >= 0) {
          // the ball "bumps" each time it crosses into a new section
          skin.style.animation = 'none';
          void skin.offsetWidth;
          skin.style.animation = 'skin-bump 0.62s cubic-bezier(.34,1.4,.64,1)';
          const ring = ringRef.current;
          if (ring) {
            ring.style.animation = 'none';
            void ring.offsetWidth;
            ring.style.animation = 'ripple 0.95s cubic-bezier(.2,.7,.3,1)';
          }
        }
        shownIcon = idx;
        glyphRefs.current.forEach((g, i) => {
          if (!g) return;
          const on = i === idx;
          g.style.opacity = on ? '1' : '0';
          g.style.transform = on ? 'scale(1)' : 'scale(0.7)';
        });
      }
    };

    const run = () => {
      if (raf) return;
      let prev = performance.now();
      const tick = (now) => {
        const dt = Math.min(64, now - prev);
        prev = now;
        target = progress();
        const d = target - current;
        current += d * (1 - Math.exp(-dt / 90));
        paint();
        if (Math.abs(d) < 0.0002) {
          current = target;
          paint();
          raf = null;
          return;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const onMove = () => run();
    window.addEventListener('scroll', onMove, { passive: true });
    window.addEventListener('resize', onMove);
    measure();
    current = target = progress();
    paint();
    run();

    return () => {
      window.removeEventListener('scroll', onMove);
      window.removeEventListener('resize', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="pointer-events-none absolute top-16 bottom-20 z-[3] hidden w-[2px] rounded-full bg-forest/15 lg:block"
      style={{
        left: 'calc(max(0px, (100% - 1160px) / 2) + clamp(20px, 3.4vw, 40px) + clamp(20px, 6vw, 66px) / 2 - 1px)',
      }}
    >
      <div
        ref={fillRef}
        className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-sage to-leaf"
        style={{ transform: 'scaleY(0)' }}
      />
      <div ref={ballRef} className="absolute left-px top-0 h-0 w-0 will-change-transform">
        <div
          ref={ringRef}
          className="pointer-events-none absolute -left-[17px] -top-[17px] h-[34px] w-[34px] rounded-full border-2 border-leaf/55 opacity-0"
        />
        <div
          ref={skinRef}
          className="absolute -left-[17px] -top-[17px] flex h-[34px] w-[34px] scale-[0.85] items-center justify-center rounded-full text-forest shadow-[0_0_0_7px_rgba(75,139,59,0.12),0_10px_20px_-10px_rgba(61,90,36,0.6)]"
          style={{ background: '#C9DEA9' }}
        >
          {RAIL_ICON_PATHS.map((paths, i) =>
            i === 2 ? (
              <svg
                key={i}
                ref={(el) => (glyphRefs.current[i] = el)}
                viewBox="0 0 24 24"
                width="23"
                height="23"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute opacity-0 scale-[0.7] transition-[opacity,transform] duration-300"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            ) : (
              <svg
                key={i}
                ref={(el) => (glyphRefs.current[i] = el)}
                viewBox="0 0 24 24"
                width={i === 4 ? '28' : '23'}
                height={i === 4 ? '28' : '23'}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute opacity-0 scale-[0.7] transition-[opacity,transform] duration-300"
              >
                {paths.map((d) => (
                  <path key={d} d={d} />
                ))}
              </svg>
            )
          )}
        </div>
      </div>
    </div>
  );
}
