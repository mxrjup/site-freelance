import { LeafIcon } from './icons';

const SITE_HREFS = ['#atouts', '#realisations', '#offres'];
const CONTACT_HREFS = ['#contact', '#questions'];

// This is a static export with no server, so `year` below is whatever the
// last build happened to run on. This inline script corrects it client-side
// (like RootShell's theme-init script) so the copyright year stays accurate
// between deploys instead of freezing until the next one.
const FOOTER_YEAR_SCRIPT = `(function(){var el=document.getElementById('footer-year');if(el)el.textContent=new Date().getFullYear();})();`;

export default function Footer({ t }) {
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
              {t.brand}
            </p>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/70">{t.tagline}</p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="mb-2.5 text-[12.5px] font-bold uppercase tracking-wide text-sage">
                {t.siteColumnTitle}
              </p>
              <ul className="flex flex-col gap-1.5">
                {t.siteLinks.map((label, i) => (
                  <li key={label}>
                    <a
                      href={SITE_HREFS[i]}
                      className="text-[15px] text-white/[0.82] hover:text-sage"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2.5 text-[12.5px] font-bold uppercase tracking-wide text-sage">
                {t.contactColumnTitle}
              </p>
              <ul className="flex flex-col gap-1.5">
                {t.contactLinks.map((label, i) => (
                  <li key={label}>
                    <a
                      href={CONTACT_HREFS[i]}
                      className="text-[15px] text-white/[0.82] hover:text-sage"
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <span className="text-[15px] text-white/60">{t.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3.5 border-t border-sage/25 pt-4">
          <p className="text-[13.5px] text-white/60">
            {t.brand} — <span id="footer-year">{year}</span>
          </p>
          <p className="text-[13.5px] text-white/60">{t.bottomRight}</p>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: FOOTER_YEAR_SCRIPT }} />
    </footer>
  );
}
