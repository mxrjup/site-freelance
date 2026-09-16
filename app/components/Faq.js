'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { ArrowRightIcon } from './icons';

export default function Faq({ t }) {
  const [open, setOpen] = useState(0);
  const items = t.items;
  const active = items[open];
  const panelRef = useRef(null);

  useEffect(() => {
    // Replay the entrance animation on every question change without
    // unmounting the panel (no `key` prop), so its `role="status"` node
    // stays the same element and screen readers pick up the content change
    // as a live-region update instead of missing a destroyed-and-recreated
    // node. Same "reset, force reflow, reapply" technique as
    // ScrollProgressRail's skin-bump/ripple animations.
    const el = panelRef.current;
    if (!el) return;
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  }, [open]);

  return (
    <section
      id="questions"
      className="relative mx-auto grid max-w-[1160px] scroll-mt-24 grid-cols-1 px-5 sm:px-10 lg:grid-cols-[clamp(20px,6vw,66px)_minmax(0,1fr)]"
    >
      <div aria-hidden="true" className="hidden lg:block" />
      <div className="pt-12 sm:pt-16">
        <Reveal as="p" className="text-[13px] font-bold uppercase tracking-[0.08em] text-clay">
          {t.eyebrow}
        </Reveal>
        <Reveal delay={40}>
          <h2 className="mt-3.5 text-[29px] leading-tight text-forest sm:text-[36px] lg:text-[43px] dark:text-cream">
            {t.h2}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-forest/90 dark:text-cream/75">
            {t.paragraph}
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-9">
          <div className="flex flex-col gap-2.5">
            {items.map((item, i) => (
              <button
                key={item.q}
                type="button"
                id={`faq-toggle-${i}`}
                onClick={() => setOpen(i)}
                aria-pressed={open === i}
                className={`grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_20px] items-center gap-3.5 rounded-full px-5 py-4 text-left text-forest transition-colors ${open === i ? 'bg-sage' : 'bg-white/70 hover:bg-sage-light dark:bg-white/10 dark:text-cream dark:hover:bg-white/15'}`}
              >
                <span className="text-pretty text-[17px] font-semibold leading-snug">{item.q}</span>
                <ArrowRightIcon
                  className={`h-[19px] w-[19px] justify-self-end transition-transform duration-300 ${open === i ? 'translate-x-1 opacity-100' : 'opacity-30'}`}
                />
              </button>
            ))}
            <div className="mt-3.5 flex flex-wrap items-center gap-3.5 px-1.5">
              <p className="text-base text-forest/85 dark:text-cream/70">{t.noQuestion}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-leaf px-5 py-3 text-[15.5px] font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-forest"
              >
                {t.ctaLabel}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            ref={panelRef}
            role="status"
            className="animate-faq-unfurl relative rounded-[30px_22px_30px_22px] bg-white/70 p-7 sm:rounded-[60px_30px_60px_30px] sm:p-11 dark:bg-white/[0.06]"
          >
            <h3 className="text-pretty text-xl leading-snug text-forest sm:text-2xl dark:text-cream">
              {active.q}
            </h3>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-forest/90 dark:text-cream/80">
              {active.a}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
