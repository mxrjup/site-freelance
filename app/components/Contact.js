import Reveal from './Reveal';
import { ClockIcon, PinIcon, ChatIcon } from './icons';

const facts = [
  { label: 'Réponse sous 24 h', Icon: ClockIcon },
  { label: 'Montpellier et alentours', Icon: PinIcon },
  { label: 'Premier échange gratuit, sans engagement', Icon: ChatIcon },
];

export default function Contact() {
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
              Contact
            </Reveal>
            <Reveal delay={40}>
              <h2 className="mt-3.5 text-[29px] leading-tight text-forest sm:text-[36px] lg:text-[43px]">
                Parlons de votre projet
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-forest/[0.76]">
                Décrivez votre activité en quelques lignes. Je vous réponds sous 24 h avec une
                première idée de ce qu&apos;on pourrait faire, sans engagement.
              </p>
            </Reveal>
            <Reveal as="ul" variant="grow" delay={140} className="mt-7 flex flex-col gap-4">
              {facts.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-3.5">
                  <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[58%_42%_52%_48%/46%_56%_44%_54%] bg-teal/25">
                    <Icon className="h-5 w-5 text-forest" />
                  </span>
                  <span className="text-base font-medium text-forest/85">{label}</span>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal
            as="form"
            variant="drop"
            delay={60}
            className="grid grid-cols-2 gap-4 rounded-[30px_22px_30px_22px] bg-white/[0.78] p-6 sm:rounded-[56px_30px_56px_30px] sm:p-9"
          >
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="contact-nom"
                className="mb-1.5 block text-sm font-semibold text-forest"
              >
                Nom
              </label>
              <input
                id="contact-nom"
                name="nom"
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-full border-[1.5px] border-forest/[0.18] bg-white px-5 py-3 text-base text-forest outline-none transition-colors focus:border-leaf"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="contact-tel"
                className="mb-1.5 block text-sm font-semibold text-forest"
              >
                Téléphone
              </label>
              <input
                id="contact-tel"
                name="telephone"
                type="tel"
                placeholder="06 00 00 00 00"
                className="w-full rounded-full border-[1.5px] border-forest/[0.18] bg-white px-5 py-3 text-base text-forest outline-none transition-colors focus:border-leaf"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-sm font-semibold text-forest"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="vous@exemple.com"
                required
                className="w-full rounded-full border-[1.5px] border-forest/[0.18] bg-white px-5 py-3 text-base text-forest outline-none transition-colors focus:border-leaf"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="contact-activite"
                className="mb-1.5 block text-sm font-semibold text-forest"
              >
                Type d&apos;activité
              </label>
              <select
                id="contact-activite"
                name="activite"
                className="w-full appearance-none rounded-full border-[1.5px] border-forest/[0.18] bg-white px-5 py-3 text-base text-forest outline-none transition-colors focus:border-leaf"
              >
                <option>Commerce ou boutique</option>
                <option>Restaurant, café, bar</option>
                <option>Artisan</option>
                <option>Profession libérale</option>
                <option>Association</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="contact-projet"
                className="mb-1.5 block text-sm font-semibold text-forest"
              >
                Votre projet en quelques lignes
              </label>
              <textarea
                id="contact-projet"
                name="projet"
                rows={5}
                placeholder="Ce que vous faites, ce que le site devrait apporter, et si vous avez une date en tête."
                className="w-full resize-y rounded-3xl border-[1.5px] border-forest/[0.18] bg-white px-5 py-4 text-base leading-relaxed text-forest outline-none transition-colors focus:border-leaf"
              />
            </div>
            <div className="col-span-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                id="contact-submit"
                className="rounded-full bg-leaf px-8 py-4 text-base font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-forest"
              >
                Envoyer ma demande
              </button>
              <span className="text-sm text-forest/60">
                Vos informations ne servent qu&apos;à vous répondre.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
