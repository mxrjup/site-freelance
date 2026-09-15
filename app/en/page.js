import BackgroundDecor from '../components/BackgroundDecor';
import Hero from '../components/Hero';
import ScrollProgressRail from '../components/ScrollProgressRail';
import WhyMe from '../components/WhyMe';
import Engagement from '../components/Engagement';
import Projects from '../components/Projects';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { dict } from '../lib/i18n';
import { buildProfessionalServiceSchema, schemaScriptProps } from '../lib/schema';
import { SITE_URL } from '../lib/siteUrl';

const lang = 'en';
const t = dict[lang];

const schema = buildProfessionalServiceSchema({
  name: 'Marius Dev',
  description: t.meta.description,
  url: `${SITE_URL}/en/`,
  image: `${SITE_URL}/en/opengraph-image`,
  priceRange: '€500+',
});

export const metadata = {
  title: t.meta.title,
  description: t.meta.description,
  keywords: t.meta.keywords,
  alternates: {
    canonical: '/en/',
    languages: { fr: '/', en: '/en/', 'x-default': '/' },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.ogDescription,
    url: '/en/',
    siteName: 'Marius Dev',
    locale: t.meta.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: t.meta.title,
    description: t.meta.twitterDescription,
  },
};

export default function HomeEn() {
  return (
    <div className="relative flex flex-1 flex-col">
      <script {...schemaScriptProps(schema)} />
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
          <Contact t={t.contact} />
        </div>
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
