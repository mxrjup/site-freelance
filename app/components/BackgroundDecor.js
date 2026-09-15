'use client';

import { useEffect, useRef } from 'react';

/**
 * Purely decorative, aria-hidden background: a faint dot grid, slow-rotating
 * arcs and a handful of drifting leaf shapes. Reacts gently to pointer
 * position and scroll to give the page a sense of depth.
 */
export default function BackgroundDecor() {
  const scrollLayerRef = useRef(null);
  const magnetRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let mx = 0;
    let my = 0;

    const onPointerMove = (event) => {
      const m = magnetRef.current;
      if (!m) return;
      const x = (event.clientX / (window.innerWidth || 1) - 0.5) * 32;
      const y = (event.clientY / (window.innerHeight || 1) - 0.5) * 22;
      if (Math.abs(x - mx) < 1.5 && Math.abs(y - my) < 1.5) return;
      mx = x;
      my = y;
      m.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      const layer = scrollLayerRef.current;
      if (!layer) return;
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      layer.style.transform = `translate3d(0, ${(y * -0.045).toFixed(2)}px, 0)`;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div ref={scrollLayerRef} className="absolute inset-0 will-change-transform">
        <div
          ref={magnetRef}
          className="absolute inset-0 [transition:transform_1.2s_cubic-bezier(.22,.61,.36,1)] will-change-transform"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(var(--decor-dot) 1.1px, transparent 1.1px)',
              backgroundSize: '19px 19px',
            }}
          />
          <div className="absolute -top-[1000px] -left-[420px] h-[1900px] w-[1900px] rounded-full border border-forest/10 [animation:arc-a_90s_ease-in-out_infinite_alternate] will-change-transform dark:border-cream/[0.14]" />
          <div className="absolute top-[420px] -right-[1150px] h-[2100px] w-[2100px] rounded-full border border-[rgba(122,138,94,0.13)] [animation:arc-b_110s_ease-in-out_infinite_alternate] will-change-transform dark:border-cream/[0.14]" />
          <div className="absolute top-[2300px] -left-[1300px] h-[2300px] w-[2300px] rounded-full border border-forest/[0.09] [animation:arc-a_130s_ease-in-out_infinite_alternate] will-change-transform dark:border-cream/[0.12]" />
          <div className="absolute top-[3600px] -right-[980px] h-[1800px] w-[1800px] rounded-full border border-clay/[0.12] [animation:arc-b_100s_ease-in-out_infinite_alternate] will-change-transform dark:border-cream/[0.16]" />

          <div className="absolute -top-10 right-[70px] h-[400px] w-[400px] rotate-[18deg] rounded-tl-full rounded-br-full bg-sage/30 [animation:leaf-drift-1_22s_ease-in-out_infinite_alternate] will-change-transform dark:bg-sage/[0.14]" />
          <div className="absolute top-[250px] right-[350px] h-[190px] w-[190px] -rotate-[32deg] rounded-tl-full rounded-br-full border border-forest/15 [animation:leaf-drift-2_26s_ease-in-out_infinite_alternate] will-change-transform dark:border-cream/20" />
          <div className="absolute top-[1020px] -left-[100px] h-[300px] w-[300px] -rotate-[8deg] rounded-tl-full rounded-br-full bg-teal/15 [animation:leaf-drift-3_30s_ease-in-out_infinite_alternate] will-change-transform dark:bg-teal/[0.14]" />
          <div className="absolute top-[1860px] -right-[80px] h-[360px] w-[360px] rotate-[12deg] rounded-tr-full rounded-bl-full bg-sage/25 [animation:leaf-drift-4_24s_ease-in-out_infinite_alternate] will-change-transform dark:bg-sage/[0.12]" />
          <div className="absolute top-[2620px] left-[30px] h-[200px] w-[200px] rotate-[24deg] rounded-tl-full rounded-br-full border border-clay/15 [animation:leaf-drift-5_28s_ease-in-out_infinite_alternate] will-change-transform dark:border-cream/20" />
          <div className="absolute top-[3320px] -left-[120px] h-[340px] w-[340px] -rotate-[14deg] rounded-tr-full rounded-bl-full bg-sage/20 [animation:leaf-drift-6_32s_ease-in-out_infinite_alternate] will-change-transform dark:bg-sage/10" />
          <div className="absolute top-[4180px] right-[30px] h-[280px] w-[280px] rotate-[6deg] rounded-tl-full rounded-br-full bg-teal/10 [animation:leaf-drift-7_27s_ease-in-out_infinite_alternate] will-change-transform dark:bg-teal/10" />
          <div className="absolute top-[4760px] left-[130px] h-[170px] w-[170px] -rotate-[26deg] rounded-tl-full rounded-br-full border border-forest/10 [animation:leaf-drift-8_34s_ease-in-out_infinite_alternate] will-change-transform dark:border-cream/15" />
        </div>
      </div>
    </div>
  );
}
