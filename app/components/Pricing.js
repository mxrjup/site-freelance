import Reveal from './Reveal';
import { CheckIcon } from './icons';

export default function Pricing({ t }) {
  const { planA, planB } = t;

  return (
    <section
      id="offres"
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
          <p className="mt-4 max-w-[620px] text-lg leading-relaxed text-forest/90 dark:text-cream/75">
            {t.paragraph}
          </p>
        </Reveal>

        <div className="mt-9 grid items-start gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8">
          <Reveal
            as="div"
            variant="drop"
            className="rounded-[30px_22px_30px_22px] bg-white/65 p-7 sm:rounded-[56px_30px_56px_30px] sm:p-11 dark:bg-white/[0.06]"
          >
            <h3 className="text-2xl leading-tight text-forest dark:text-cream">{planA.title}</h3>
            <p className="mt-3 text-[16.5px] leading-relaxed text-forest/90 dark:text-cream/75">
              {planA.body}
            </p>
            <div className="mt-6 flex flex-col gap-1">
              <p className="font-display text-[27px] leading-tight text-clay sm:text-[33px]">
                {planA.price}
              </p>
              <p className="text-sm font-medium text-forest/85 dark:text-cream/60">
                {planA.priceNote}
              </p>
            </div>
            <ul className="mt-6 flex flex-col gap-3.5">
              {planA.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2.5 text-base leading-snug text-forest/90 dark:text-cream/80"
                >
                  <CheckIcon className="mt-[3px] h-[18px] w-[18px] shrink-0 text-leaf" />
                  {feat}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-7 inline-block rounded-full bg-sage/55 px-6 py-3 text-base font-semibold text-forest transition-colors hover:bg-sage dark:bg-sage/20 dark:text-cream dark:hover:bg-sage/30"
            >
              {planA.cta}
            </a>
          </Reveal>

          <Reveal
            as="div"
            variant="drop"
            delay={90}
            className="relative rounded-[22px_30px_22px_30px] bg-sage-pale p-7 sm:rounded-[30px_56px_30px_56px] sm:p-11 dark:bg-white/[0.06]"
          >
            <span className="inline-block rounded-full bg-leaf px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              {planB.badge}
            </span>
            <h3 className="mt-4 text-2xl leading-tight text-forest dark:text-cream">
              {planB.title}
            </h3>
            <p className="mt-3 text-[16.5px] leading-relaxed text-forest/90 dark:text-cream/[0.78]">
              {planB.body}
            </p>
            <div className="mt-6 flex flex-col gap-1">
              <p className="font-display text-[27px] leading-tight text-clay sm:text-[33px]">
                {planB.price}
              </p>
              <p className="text-sm font-medium text-forest/85 dark:text-cream/[0.66]">
                {planB.priceNote}
              </p>
            </div>
            <ul className="mt-6 flex flex-col gap-3.5">
              {planB.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2.5 text-base leading-snug text-forest/85 dark:text-cream/85"
                >
                  <CheckIcon className="mt-[3px] h-[18px] w-[18px] shrink-0 text-leaf" />
                  {feat}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-7 inline-block rounded-full bg-leaf px-7 py-3.5 text-base font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_18px_32px_-18px_rgba(61,90,36,0.7)]"
            >
              {planB.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
