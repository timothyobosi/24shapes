// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Bio from './sections/Bio'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App