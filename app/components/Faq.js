'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { ArrowRightIcon } from './icons';

export default function Faq({ t }) {
  const [open, setOpen] = useState(0);
  const items = t.items;
  const active = items[open];

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
          <h2 className="mt-3.5 text-[29px] leading-tight text-forest sm:text-[36px] lg:text-[43px]">
            {t.h2}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-forest/75">
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
                className={`grid w-full grid-cols-[minmax(0,1fr)_20px] items-center gap-3.5 rounded-full px-5 py-4 text-left transition-colors ${open === i ? 'bg-sage' : 'bg-white/70 hover:bg-sage-light'}`}
              >
                <span className="text-pretty text-[17px] font-semibold leading-snug text-forest">
                  {item.q}
                </span>
                <ArrowRightIcon
                  className={`h-[19px] w-[19px] justify-self-end text-forest transition-transform duration-300 ${open === i ? 'translate-x-1 opacity-100' : 'opacity-30'}`}
                />
              </button>
            ))}
            <div className="mt-3.5 flex flex-wrap items-center gap-3.5 px-1.5">
              <p className="text-base text-forest/70">{t.noQuestion}</p>
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
            key={open}
            role="status"
            className="animate-faq-unfurl relative rounded-[30px_22px_30px_22px] bg-white/70 p-7 sm:rounded-[60px_30px_60px_30px] sm:p-11"
          >
            <h3 className="text-pretty text-xl leading-snug text-forest sm:text-2xl">{active.q}</h3>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-forest/80">
              {active.a}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
