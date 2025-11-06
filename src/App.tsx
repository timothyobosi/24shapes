// src/App.tsx
import { useEffect } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Bio from './sections/Bio'
import Footer from './sections/Footer'
import Services from './sections/Services'
import Vaccination from './sections/Vaccination'
import Consultation from './sections/Consultation'
import Payment from './sections/Payment'
import LazyMount from './components/LazyMount'

function App() {
  useEffect(() => {
    const normalize = () => {
      const { hash } = window.location;
      if (hash && hash.includes('?')) {
        const query = hash.split('?')[1];
        const params = new URLSearchParams(query);
        const svc = params.get('service') || '';
        if (svc) {
          const url = new URL(window.location.href);
          url.searchParams.set('service', svc);
          history.replaceState(null, '', url.toString());
        }
        window.location.hash = 'consultation';
        const el = document.getElementById('consultation');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const url = new URL(window.location.href);
        const svc = url.searchParams.get('service');
        if (svc) {
          // Only force Consultation if there's no hash or it's already consultation
          if (!hash || hash === '#consultation') {
            if (window.location.hash !== '#consultation') {
              window.location.hash = 'consultation';
            }
            const el = document.getElementById('consultation');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            // Navigating elsewhere: drop the service param and let the anchor work
            url.searchParams.delete('service');
            history.replaceState(null, '', url.toString());
          }
        }
      }
    };
    normalize();
    window.addEventListener('hashchange', normalize);
    return () => window.removeEventListener('hashchange', normalize);
  }, []);
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <LazyMount id="bio" minHeight={400}>
          <Bio />
        </LazyMount>
        <LazyMount id="services" minHeight={400}>
          <Services />
        </LazyMount>
        <LazyMount id="vaccination" minHeight={400}>
          <Vaccination />
        </LazyMount>
        <LazyMount id="consultation" minHeight={400}>
          <Consultation />
        </LazyMount>
        <LazyMount id="payment" minHeight={300}>
          <Payment />
        </LazyMount>
      </main>
      <Footer />
    </div>
  )
}

export default App