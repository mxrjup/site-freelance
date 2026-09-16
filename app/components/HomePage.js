import BackgroundDecor from './BackgroundDecor';
import Hero from './Hero';
import ScrollProgressRail from './ScrollProgressRail';
import WhyMe from './WhyMe';
import Engagement from './Engagement';
import Projects from './Projects';
import Pricing from './Pricing';
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';
import { dict } from '../lib/i18n';
import { buildProfessionalServiceSchema, buildFaqSchema, schemaScriptProps } from '../lib/schema';
import { SITE_URL } from '../lib/siteUrl';

export default function HomePage({ lang }) {
  const t = dict[lang];
  const path = lang === 'fr' ? '/' : `/${lang}/`;

  const schema = buildProfessionalServiceSchema({
    name: 'Marius Dev',
    description: t.meta.description,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${path}opengraph-image`,
    priceRange: lang === 'fr' ? '500€+' : '€500+',
  });

  const faqSchema = buildFaqSchema(t.faq.items);

  return (
    <div className="relative flex flex-1 flex-col">
      <script {...schemaScriptProps(schema)} />
      <script {...schemaScriptProps(faqSchema)} />
      <BackgroundDecor />
      <main className="relative flex-1">
        <Hero t={t.hero} />
        <div className="relative">
          <ScrollProgressRail />
          <WhyMe t={t.whyMe} />
          <Engagement t={t.engagement} />
          <Projects t={t.projects} />
          <Pricing t={t.pricing} />
          <Faq t={t.faq} />
          <Contact t={t.contact} redirectTo={`${SITE_URL}${path}`} />
        </div>
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
