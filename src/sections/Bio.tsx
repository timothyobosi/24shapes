'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Bio = () => {
  const tabs = {
    standard: {
      label: 'Standard',
      title: 'Our Professional Approach',
      content:
        '24 Shapes Laboratory is a modern diagnostic service provider dedicated to precise and reliable results. We specialize in a comprehensive range of tests, using state-of-the-art technology to support healthcare providers in accurate diagnosis, effective treatment monitoring, and proactive health screening. Our commitment is to deliver clarity and confidence through exceptional laboratory science.',
      cta: 'Explore Our Services',
      link: '#services'
    },
    vision: {
      label: 'Vision',
      title: 'Our Vision for Healthcare',
      content:
        'At 24 Shapes Laboratory, we see health from every angle. Our mission is to provide a complete picture of your well-being through advanced analysis and compassionate service. We turn complex data into clear, actionable health insights that empower you to make informed decisions about your health journey.',
      cta: 'Schedule a Consultation',
      link: '#consultation'
    },
    short: {
      label: 'Short & Punchy',
      title: 'Our Commitment to You',
      content:
        '24 Shapes Laboratory: Where precision takes shape. We deliver accurate, timely diagnostic testing using cutting-edge technology and expert analysis. Our team of dedicated professionals works tirelessly to provide results you can trust, when you need them most.',
      cta: 'View Vaccination Options',
      link: '#vaccination'
    },
    simple: {
      label: 'Simple & Direct',
      title: 'Straightforward Excellence',
      content:
        '24 Shapes Laboratory: Precise testing for a healthier you. We believe in making quality diagnostic services accessible, reliable, and understandable. Your health deserves nothing less than our unwavering commitment to accuracy and care.',
      cta: 'Payment Options',
      link: '#payment'
    }
  } as const

  type TabKey = keyof typeof tabs
  const [active, setActive] = useState<TabKey>('standard')
  const current = tabs[active]

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        {/* Tabs — 100% identical to your original */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 40, borderBottom: '1px solid #eee' }}>
          {(Object.keys(tabs) as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                padding: '15px 30px',
                cursor: 'pointer',
                fontWeight: 600,
                border: 'none',
                borderBottom: active === key ? '3px solid var(--primary)' : '3px solid transparent',
                color: active === key ? 'var(--primary)' : 'inherit',
                background: 'transparent'
              }}
            >
              {tabs[key as TabKey].label}
            </button>
          ))}
        </div>

        {/* Content — wrapped in motion for smooth transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: 20 }}>
              {current.title}
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: 30 }}>
              {current.content}
            </p>
            <a
              href={current.link}
              style={{
                backgroundColor: 'var(--primary)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: 30,
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              {current.cta}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Bio