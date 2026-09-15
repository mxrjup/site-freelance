import BackgroundDecor from './components/BackgroundDecor';
import Hero from './components/Hero';
import ScrollProgressRail from './components/ScrollProgressRail';
import WhyMe from './components/WhyMe';
import Engagement from './components/Engagement';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { dict } from './lib/i18n';

const lang = 'fr';
const t = dict[lang];

export const metadata = {
  title: t.meta.title,
  description: t.meta.description,
  keywords: t.meta.keywords,
  alternates: {
    canonical: '/',
    languages: { fr: '/', en: '/en/', 'x-default': '/' },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.ogDescription,
    url: '/',
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

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
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
