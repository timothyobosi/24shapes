// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Bio from './sections/Bio'
import Footer from './sections/Footer'
import Services from './sections/Services'
import Vaccination from './sections/Vaccination'
import Consultation from './sections/Consultation'
import Payment from './sections/Payment'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vaccination" element={<Vaccination />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App