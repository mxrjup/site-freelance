import Reveal from './Reveal';
import { LeafIcon, FeatherIcon, BriefcaseIcon } from './icons';

const ICONS = [LeafIcon, FeatherIcon, BriefcaseIcon];

export default function Engagement({ t }) {
  const items = t.items.map((item, i) => ({ ...item, Icon: ICONS[i] }));
  return (
    <section
      id="engagement"
      className="relative mx-auto grid max-w-[1160px] scroll-mt-24 grid-cols-1 px-5 sm:px-10 lg:grid-cols-[clamp(20px,6vw,66px)_minmax(0,1fr)]"
    >
      <div aria-hidden="true" className="hidden lg:block" />
      <Reveal
        as="div"
        variant="drop"
        className="relative mt-12 overflow-hidden rounded-[36px_28px_36px_28px] bg-forest px-7 py-9 text-white sm:mt-16 sm:rounded-[64px_40px_64px_40px] sm:px-12 sm:py-14"
      >
        <div className="pointer-events-none absolute -top-28 -right-20 h-[300px] w-[300px] animate-blob-morph rounded-full bg-sage/[0.14]" />
        <div className="relative">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-sage">{t.eyebrow}</p>
          <div className="mt-3.5 grid gap-4 sm:grid-cols-2 sm:items-end sm:gap-10">
            <h2 className="text-pretty text-[29px] leading-tight text-white sm:text-[36px] lg:text-[43px]">
              {t.h2}
            </h2>
            <p className="text-pretty text-[17.5px] leading-relaxed text-white/80">{t.paragraph}</p>
          </div>
          <div className="mt-9 grid gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-9">
            {items.map(({ title, body, Icon }) => (
              <div key={title}>
                <span className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-[58%_42%_52%_48%/46%_56%_44%_54%] bg-sage">
                  <Icon className="h-[25px] w-[25px] text-forest" />
                </span>
                <h3 className="mt-5 text-xl leading-snug text-white">{title}</h3>
                <p className="mt-2.5 text-pretty text-[16.5px] leading-relaxed text-white/[0.78]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
