import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingIcons from './components/FloatingIcons';

function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    document.title = 'Purple Asters - Pre School & Day Care';
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <FloatingIcons />
      <Navbar onNavigate={handleNavigate} />
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
