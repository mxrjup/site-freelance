import Reveal from './Reveal';
import { TailorIcon, PhoneIcon, SearchIcon } from './icons';

const ICONS = [TailorIcon, PhoneIcon, SearchIcon];

export default function WhyMe({ t }) {
  const items = t.items.map((item, i) => ({ ...item, Icon: ICONS[i] }));
  return (
    <section
      id="atouts"
      className="relative mx-auto grid max-w-[1160px] scroll-mt-24 grid-cols-1 px-5 sm:px-10 lg:grid-cols-[clamp(20px,6vw,66px)_minmax(0,1fr)]"
    >
      <div aria-hidden="true" className="hidden lg:block" />
      <div className="pt-12 lg:pt-16">
        <Reveal as="p" className="text-[13px] font-bold uppercase tracking-[0.08em] text-clay">
          {t.eyebrow}
        </Reveal>
        <Reveal delay={40}>
          <h2 className="mt-3.5 max-w-[640px] text-pretty text-[29px] leading-tight text-forest sm:text-[36px] lg:text-[43px]">
            {t.h2}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-forest/75">
            {t.paragraph}
          </p>
        </Reveal>

        <div className="mt-9 flex flex-col gap-8 sm:mt-12 sm:gap-11">
          {items.map(({ title, body, Icon }, i) => (
            <Reveal
              key={title}
              as="div"
              variant={i % 2 === 0 ? 'driftLeft' : 'driftRight'}
              delay={i * 90}
              className="grid grid-cols-[62px_minmax(0,1fr)] items-start gap-6"
              style={{ marginLeft: `clamp(0px, ${i * 3}vw, ${i * 44}px)` }}
            >
              <span className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-[58%_42%_52%_48%/46%_56%_44%_54%] bg-sage">
                <Icon className="h-[27px] w-[27px] text-forest" />
              </span>
              <div>
                <h3 className="mt-1.5 text-2xl leading-snug text-forest">{title}</h3>
                <p className="mt-2.5 max-w-[560px] text-pretty text-[17px] leading-relaxed text-forest/75">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
