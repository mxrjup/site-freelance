'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { ArrowRightIcon } from './icons';

const items = [
  {
    q: 'Je peux modifier mon site moi-même ?',
    a: "Oui, si vous le souhaitez. Je peux mettre en place un espace simple pour changer vos textes, vos photos ou vos horaires, sans toucher à quoi que ce soit de technique. Et si vous préférez ne pas y penser, je m'en occupe pour vous jusqu'à 3 fois après la mise en ligne.",
  },
  {
    q: 'Combien de temps faut-il pour avoir mon site ?',
    a: "Comptez deux à quatre semaines pour un site vitrine, à partir du moment où j'ai vos textes et vos photos. On fixe la date ensemble dès le premier échange, et je vous présente le site une fois qu'il est prêt à être relu.",
  },
  {
    q: "Pouvez-vous reprendre un site que j'ai déjà ?",
    a: "Oui. On regarde ensemble ce qui existe : parfois quelques corrections suffisent, parfois il vaut mieux repartir d'une base propre.",
  },
  {
    q: 'Que se passe-t-il après la mise en ligne ?',
    a: "Je reste joignable. Le Pack Sérénité couvre le nom de domaine, l'hébergement vert, le certificat de sécurité, les sauvegardes et les mises à jour : il n'y a rien à surveiller de votre côté.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  const active = items[open];

  return (
    <section
      id="questions"
      className="relative mx-auto grid max-w-[1160px] scroll-mt-24 grid-cols-1 px-5 sm:px-10 lg:grid-cols-[clamp(20px,6vw,66px)_minmax(0,1fr)]"
    >
      <div aria-hidden="true" className="hidden lg:block" />
      <div className="pt-12 sm:pt-16">
        <Reveal as="p" className="text-[13px] font-bold uppercase tracking-[0.08em] text-clay">
          Questions
        </Reveal>
        <Reveal delay={40}>
          <h2 className="mt-3.5 text-[29px] leading-tight text-forest sm:text-[36px] lg:text-[43px]">
            Les questions qu&apos;on me pose
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-forest/75">
            Sans jargon. Si la vôtre n&apos;y est pas, elle a sa place dans le formulaire plus bas.
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
              <p className="text-base text-forest/70">
                Votre question n&apos;est pas dans la liste&nbsp;?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-leaf px-5 py-3 text-[15.5px] font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-forest"
              >
                Posez-la ici
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
