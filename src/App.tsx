// src/App.tsx
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
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <LazyMount id="bio" minHeight={400}>
          <Bio />
        </LazyMount>
        <LazyMount minHeight={400}>
          <Services />
        </LazyMount>
        <LazyMount minHeight={400}>
          <Vaccination />
        </LazyMount>
        <LazyMount minHeight={400}>
          <Consultation />
        </LazyMount>
        <LazyMount minHeight={300}>
          <Payment />
        </LazyMount>
      </main>
      <Footer />
    </div>
  )
}

export default App