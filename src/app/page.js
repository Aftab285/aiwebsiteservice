import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import PortfolioSlider from './components/PortfolioSlider/PortfolioSlider';
import Services from './components/Services/Services';
import AITools from './components/AITools/AITools';
import FreeDesign from './components/FreeDesign/FreeDesign';
import WhyChooseMe from './components/WhyChooseMe/WhyChooseMe';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioSlider />
        <AboutMe />
        <Services />
        <AITools />
        <FreeDesign />
        <WhyChooseMe />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
