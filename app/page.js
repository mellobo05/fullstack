import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import FeatureCards from '../src/components/FeatureCards';
import StatsSection from '../src/components/StatsSection';
import ContactForm from '../src/components/ContactForm';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureCards />
      <StatsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
