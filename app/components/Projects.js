import Image from 'next/image';
import Reveal from './Reveal';
import Parallax from './Parallax';
import { CompassIcon, UtensilsIcon, ExternalLinkIcon } from './icons';
import projectShot from '../../public/images/project-mxrjup.webp';

export default function Projects() {
  return (
    <section
      id="realisations"
      className="relative mx-auto grid max-w-[1160px] scroll-mt-24 grid-cols-1 px-5 sm:px-10 lg:grid-cols-[clamp(20px,6vw,66px)_minmax(0,1fr)]"
    >
      <div aria-hidden="true" className="hidden lg:block" />
      <div className="pt-12 sm:pt-16">
        <Reveal as="p" className="text-[13px] font-bold uppercase tracking-[0.08em] text-clay">
          Réalisations
        </Reveal>
        <Reveal delay={40}>
          <h2 className="mt-3.5 text-[29px] leading-tight text-forest sm:text-[36px] lg:text-[43px]">
            Trois sites, trois besoins
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-[600px] text-lg leading-relaxed text-forest/75">
            Trois sites en ligne, chacun parti d&apos;un besoin précis. Rien de recyclé.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-col gap-10 sm:mt-12 sm:gap-14">
          <Reveal
            as="article"
            variant="driftLeft"
            className="grid items-center gap-6 sm:grid-cols-2 sm:gap-10"
          >
            <Parallax
              amount={14}
              className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-[56%_44%_52%_48%/46%_52%_48%_54%] bg-moss [animation:blob-morph_24s_ease-in-out_infinite_alternate] sm:h-[250px]"
            >
              <CompassIcon className="h-16 w-16 text-forest/40" />
            </Parallax>
            <div>
              <span className="inline-block rounded-full bg-white/75 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-clay">
                Conseil indépendant
              </span>
              <h3 className="mt-4 text-[26px] leading-tight text-forest">Via Orientation</h3>
              <p className="mt-3 max-w-[480px] text-pretty text-[17px] leading-relaxed text-forest/75">
                Site d&apos;une conseillère d&apos;orientation indépendante&nbsp;: son
                accompagnement présenté clairement, et une prise de contact qui va droit au but.
              </p>
            </div>
          </Reveal>

          <Reveal
            as="article"
            variant="driftRight"
            className="grid items-center gap-6 sm:grid-cols-2 sm:gap-10"
          >
            <Parallax
              amount={-16}
              className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-[48%_52%_44%_56%/54%_46%_54%_46%] bg-sage [animation:blob-morph_27s_ease-in-out_-9s_infinite_alternate] sm:order-2 sm:h-[250px]"
            >
              <UtensilsIcon className="h-16 w-16 text-forest/40" />
            </Parallax>
            <div className="sm:order-1">
              <span className="inline-block rounded-full bg-white/75 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-clay">
                Restaurant
              </span>
              <h3 className="mt-4 text-[26px] leading-tight text-forest">Hakko</h3>
              <p className="mt-3 max-w-[480px] text-pretty text-[17px] leading-relaxed text-forest/75">
                Site d&apos;un restaurant végétarien à Montpellier&nbsp;: la carte, les horaires et
                l&apos;adresse trouvés en deux secondes depuis un téléphone.
              </p>
            </div>
          </Reveal>

          <Reveal
            as="article"
            variant="driftLeft"
            className="grid items-center gap-6 sm:grid-cols-2 sm:gap-10"
          >
            <Parallax
              amount={12}
              className="relative h-[220px] overflow-hidden rounded-[52%_48%_56%_44%/48%_54%_46%_52%] bg-white/60 [animation:blob-morph_21s_ease-in-out_-4s_infinite_alternate-reverse] sm:h-[250px]"
            >
              <Image
                src={projectShot}
                alt="Aperçu du site personnel Mxrjup"
                fill
                className="object-cover object-left-top saturate-[0.72] contrast-[0.94]"
                sizes="(min-width: 640px) 480px, 90vw"
              />
            </Parallax>
            <div>
              <span className="inline-block rounded-full bg-teal/25 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-forest">
                Laboratoire
              </span>
              <h3 className="mt-4 text-[26px] leading-tight text-forest">Mxrjup</h3>
              <p className="mt-3 max-w-[480px] text-pretty text-[17px] leading-relaxed text-forest/75">
                Mon site personnel, volontairement expérimental&nbsp;: le terrain où je teste des
                idées avant d&apos;en garder les meilleures pour mes clients.
              </p>
              <a
                href="https://mxrjup.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 inline-flex items-center gap-2 text-[15.5px] font-semibold text-clay transition-colors hover:text-forest"
              >
                mxrjup.fun
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
