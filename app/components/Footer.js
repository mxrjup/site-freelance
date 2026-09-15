import { LeafIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative rounded-t-[32px] bg-forest px-5 pb-6 pt-9 text-white sm:rounded-t-[72px] sm:px-10">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-wrap items-start justify-between gap-7">
          <div className="max-w-[300px]">
            <p className="flex items-center gap-2.5 font-display text-lg text-white">
              <span className="inline-flex h-[29px] w-[29px] items-center justify-center rounded-[60%_40%_55%_45%/50%_55%_45%_50%] bg-sage">
                <LeafIcon className="h-4 w-4 text-forest" />
              </span>
              Marius Dev
            </p>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/70">
              Création de sites web éco-responsables à Montpellier et alentours.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="mb-2.5 text-[12.5px] font-bold uppercase tracking-wide text-sage">
                Le site
              </p>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <a href="#atouts" className="text-[15px] text-white/[0.82] hover:text-sage">
                    Pourquoi moi
                  </a>
                </li>
                <li>
                  <a href="#realisations" className="text-[15px] text-white/[0.82] hover:text-sage">
                    Réalisations
                  </a>
                </li>
                <li>
                  <a href="#offres" className="text-[15px] text-white/[0.82] hover:text-sage">
                    Offres
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2.5 text-[12.5px] font-bold uppercase tracking-wide text-sage">
                Contact
              </p>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <a href="#contact" className="text-[15px] text-white/[0.82] hover:text-sage">
                    Formulaire
                  </a>
                </li>
                <li>
                  <a href="#questions" className="text-[15px] text-white/[0.82] hover:text-sage">
                    Questions fréquentes
                  </a>
                </li>
                <li>
                  <span className="text-[15px] text-white/60">Montpellier, France</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3.5 border-t border-sage/25 pt-4">
          <p className="text-[13.5px] text-white/60">Marius Dev — {year}</p>
          <p className="text-[13.5px] text-white/60">
            Hébergé sur des serveurs alimentés en énergie renouvelable.
          </p>
        </div>
      </div>
    </footer>
  );
}
