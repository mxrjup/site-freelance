import Header from './components/Header';
import Hero from './components/Hero';
import StudentAdvantage from './components/StudentAdvantage';
import EcoHosting from './components/EcoHosting';
import Offers from './components/Offers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StudentAdvantage />
        <EcoHosting />
        <Offers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
