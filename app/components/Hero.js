import Image from 'next/image';
import Reveal from './Reveal';
import { PinIcon, CheckIcon } from './icons';
import portrait from '../../public/images/portrait-marius.webp';

export default function Hero({ t }) {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-[1160px] scroll-mt-24 px-5 py-11 sm:px-10 sm:py-16 lg:py-20"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal variant="drop">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 py-2 pl-3 pr-4 text-[13px] font-semibold tracking-wide text-forest uppercase dark:bg-white/10 dark:text-cream">
              <PinIcon className="h-[15px] w-[15px] text-clay" />
              {t.badge}
            </span>
          </Reveal>

          <Reveal variant="rise" delay={60}>
            <h1 className="mt-5 text-balance text-[38px] leading-[1.05] tracking-tight text-forest sm:text-[48px] lg:text-[62px] dark:text-cream">
              {t.h1}
            </h1>
          </Reveal>

          <Reveal variant="rise" delay={120}>
            <p className="mt-6 max-w-[540px] text-pretty text-lg leading-relaxed text-forest/80 sm:text-xl dark:text-cream/80">
              {t.paragraph}
            </p>
          </Reveal>

          <Reveal variant="drop" delay={160}>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                id="hero-cta-primary"
                className="rounded-full bg-leaf px-[30px] py-4 text-[16px] font-semibold text-white shadow-[0_12px_26px_-16px_rgba(61,90,36,0.6)] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_18px_32px_-18px_rgba(61,90,36,0.7)]"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#offres"
                id="hero-cta-secondary"
                className="rounded-full bg-white/60 px-[26px] py-[15px] text-[16px] font-semibold text-forest transition-colors hover:bg-sage/55 dark:bg-white/10 dark:text-cream dark:hover:bg-sage/20"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal variant="grow" delay={220}>
            <ul className="mt-9 flex flex-wrap gap-6">
              {t.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[15px] font-medium text-forest/80 dark:text-cream/80"
                >
                  <CheckIcon className="h-[17px] w-[17px] text-leaf" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="bloom" delay={100} className="relative flex justify-center">
          <div className="pointer-events-none absolute left-3.5 top-6 h-[280px] w-[280px] animate-blob-morph rounded-[55%_45%_60%_40%/48%_58%_42%_52%] bg-moss sm:h-[330px] sm:w-[330px]" />
          <div className="relative h-[290px] w-[290px] animate-blob-morph overflow-hidden rounded-[58%_42%_52%_48%/46%_56%_44%_54%] bg-[radial-gradient(120%_100%_at_50%_12%,#DDE9C6_0%,#B7D99A_52%,#A3C6A0_100%)] sm:h-[340px] sm:w-[340px]">
            <Image
              src={portrait}
              alt={t.portraitAlt}
              fill
              className="object-cover saturate-[0.9]"
              sizes="340px"
              priority
            />
          </div>
          <div className="absolute -bottom-3.5 left-0 flex animate-float-y items-center gap-2.5 rounded-full bg-white/95 py-2.5 pl-3 pr-[18px] shadow-[0_14px_28px_-18px_rgba(61,90,36,0.5)] dark:bg-night-header">
            <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-sage">
              <GraduationCapIcon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-forest dark:text-cream">
              {t.studentLine1}
              <br />
              <span className="font-medium text-forest/65 dark:text-cream/65">
                {t.studentLine2}
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GraduationCapIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3D5A24"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
