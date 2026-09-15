import BackgroundDecor from './components/BackgroundDecor';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollProgressRail from './components/ScrollProgressRail';
import WhyMe from './components/WhyMe';
import Engagement from './components/Engagement';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <BackgroundDecor />
      <Header />
      <main className="relative flex-1">
        <Hero />
        <div className="relative">
          <ScrollProgressRail />
          <WhyMe />
          <Engagement />
          <Projects />
          <Pricing />
          <Faq />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
