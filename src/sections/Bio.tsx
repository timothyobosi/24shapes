import { useState } from 'react'
import { Link } from 'react-router-dom'

const Bio = () => {
  const [active, setActive] = useState('standard')

  const tabs = {
    standard: { title: "Our Professional Approach", content: "Modern diagnostic lab...", cta: "Explore Services", link: "/" },
    vision: { title: "Our Vision", content: "Health from every angle...", cta: "Consult", link: "/" }
  }

  const current = tabs[active]

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 40 }}>
          {Object.keys(tabs).map(key => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                padding: '10px 20px',
                background: active === key ? 'var(--primary)' : 'transparent',
                color: active === key ? 'white' : 'var(--primary)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary)' }}>{current.title}</h2>
          <p>{current.content}</p>
          <Link to={current.link} style={{ color: 'var(--primary)' }}>{current.cta}</Link>
        </div>
      </div>
    </section>
  )
}

export default Bio