import Reveal from './Reveal';
import { ClockIcon, PinIcon, ChatIcon } from './icons';

const ICONS = [ClockIcon, PinIcon, ChatIcon];

// PostTo endpoint for this form (EU-hosted): https://postto.dev/api/v1/send/<token>
// Subject line and autoresponder text are configured once, in the PostTo dashboard for this endpoint.
const POSTTO_ENDPOINT = 'https://postto.dev/api/v1/send/ep_IZAC028sIRx5Zm3p';

export default function Contact({ t, redirectTo }) {
  const facts = t.facts.map((label, i) => ({ label, Icon: ICONS[i] }));
  const f = t.form;

  return (
    <section
      id="contact"
      className="relative mx-auto grid max-w-[1160px] scroll-mt-24 grid-cols-1 px-5 pb-14 sm:px-10 sm:pb-20 lg:grid-cols-[clamp(20px,6vw,66px)_minmax(0,1fr)]"
    >
      <div aria-hidden="true" className="hidden lg:block" />
      <div className="pt-12 sm:pt-16">
        <div className="grid items-start gap-8 sm:grid-cols-2 sm:gap-12">
          <div>
            <Reveal as="p" className="text-[13px] font-bold uppercase tracking-[0.08em] text-clay">
              {t.eyebrow}
            </Reveal>
            <Reveal delay={40}>
              <h2 className="mt-3.5 text-[29px] leading-tight text-forest sm:text-[36px] lg:text-[43px] dark:text-cream">
                {t.h2}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-forest/[0.76] dark:text-cream/[0.76]">
                {t.paragraph}
              </p>
            </Reveal>
            <Reveal as="ul" variant="grow" delay={140} className="mt-7 flex flex-col gap-4">
              {facts.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-3.5">
                  <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[58%_42%_52%_48%/46%_56%_44%_54%] bg-teal/25">
                    <Icon className="h-5 w-5 text-forest" />
                  </span>
                  <span className="text-base font-medium text-forest/85 dark:text-cream/85">
                    {label}
                  </span>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal
            as="form"
            variant="drop"
            delay={60}
            action={POSTTO_ENDPOINT}
            method="POST"
            className="grid grid-cols-2 gap-4 rounded-[30px_22px_30px_22px] bg-white/[0.78] p-6 sm:rounded-[56px_30px_56px_30px] sm:p-9 dark:bg-white/[0.06]"
          >
            {redirectTo && <input type="hidden" name="_next" value={redirectTo} />}
            <input
              type="text"
              name="_hp"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="contact-nom"
                className="mb-1.5 block text-sm font-semibold text-forest dark:text-cream"
              >
                {f.nameLabel}
              </label>
              <input
                id="contact-nom"
                name="nom"
                type="text"
                placeholder={f.namePlaceholder}
                className="w-full rounded-full border-[1.5px] border-forest/[0.18] bg-white px-5 py-3 text-base text-forest outline-none transition-colors focus:border-leaf dark:border-cream/15 dark:bg-white/5 dark:text-cream"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="contact-tel"
                className="mb-1.5 block text-sm font-semibold text-forest dark:text-cream"
              >
                {f.phoneLabel}
              </label>
              <input
                id="contact-tel"
                name="telephone"
                type="tel"
                placeholder={f.phonePlaceholder}
                className="w-full rounded-full border-[1.5px] border-forest/[0.18] bg-white px-5 py-3 text-base text-forest outline-none transition-colors focus:border-leaf dark:border-cream/15 dark:bg-white/5 dark:text-cream"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-sm font-semibold text-forest dark:text-cream"
              >
                {f.emailLabel}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder={f.emailPlaceholder}
                required
                className="w-full rounded-full border-[1.5px] border-forest/[0.18] bg-white px-5 py-3 text-base text-forest outline-none transition-colors focus:border-leaf dark:border-cream/15 dark:bg-white/5 dark:text-cream"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="contact-activite"
                className="mb-1.5 block text-sm font-semibold text-forest dark:text-cream"
              >
                {f.activityLabel}
              </label>
              <select
                id="contact-activite"
                name="activite"
                className="w-full appearance-none rounded-full border-[1.5px] border-forest/[0.18] bg-white px-5 py-3 text-base text-forest outline-none transition-colors focus:border-leaf dark:border-cream/15 dark:bg-white/5 dark:text-cream"
              >
                {f.activityOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="contact-projet"
                className="mb-1.5 block text-sm font-semibold text-forest dark:text-cream"
              >
                {f.projectLabel}
              </label>
              <textarea
                id="contact-projet"
                name="projet"
                rows={5}
                placeholder={f.projectPlaceholder}
                className="w-full resize-y rounded-3xl border-[1.5px] border-forest/[0.18] bg-white px-5 py-4 text-base leading-relaxed text-forest outline-none transition-colors focus:border-leaf dark:border-cream/15 dark:bg-white/5 dark:text-cream"
              />
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                id="contact-submit"
                className="rounded-full bg-leaf px-8 py-4 text-base font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-forest"
              >
                {f.submit}
              </button>
              <span className="text-sm text-forest/60 dark:text-cream/60">{f.privacyNote}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
