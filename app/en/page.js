import BackgroundDecor from '../components/BackgroundDecor';
import HtmlLang from '../components/HtmlLang';
import Header from '../components/Header';
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

const lang = 'en';
const t = dict[lang];

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
    <div className="relative flex min-h-full flex-col">
      <HtmlLang lang={lang} />
      <BackgroundDecor />
      <Header lang={lang} t={t.header} />
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
