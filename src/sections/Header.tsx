import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faClock, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const clearServiceParam = () => {
    const url = new URL(window.location.href)
    if (url.searchParams.has('service')) {
      url.searchParams.delete('service')
      history.replaceState(null, '', url.toString())
    }
  }
  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <style>{`
        .header-row { display: flex; justify-content: space-between; align-items: center; }
        .brand { display: flex; align-items: center; flex-shrink: 0; white-space: nowrap; }
        .nav { display: flex; justify-content: center; flex: 1 1 auto; min-width: 0; overflow: hidden; }
        .menu-toggle { display: none; background: none; border: 0; color: var(--dark); padding: 8px; cursor: pointer; }
        .cta { flex-shrink: 0; white-space: nowrap; }
        .mobile-menu { display: none; }
        @media (max-width: 768px) {
          .header-row { flex-wrap: wrap; }
          .nav { order: 3; flex-basis: 100%; display: flex; justify-content: center; margin-top: 8px; }
          .menu-toggle { display: none; }
          .mobile-menu { display: none; }
        }
        /* Compact layout for small screens */
        @media (max-width: 600px) {
          .header-row { align-items: flex-start; }
          .nav { display: none !important; }
          .menu-toggle { display: inline-flex; align-items: center; justify-content: center; order: 2; margin-left: 8px; }
          .cta { display: none; }
          .mobile-menu { display: block; width: 100%; }
        }
      `}</style>
      <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '8px 16px', fontSize: '0.9rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span><FontAwesomeIcon icon={faPhone} /> +254 704 081 195</span>
          <span><FontAwesomeIcon icon={faClock} /> Open 24/7</span>
        </div>
      </div>

      <div style={{ padding: '15px 16px' }}>
        <div className="header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="brand" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, whiteSpace: 'nowrap' }}>
            <div style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              width: 50,
              height: 50,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}>24S</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>
              24 <span style={{ color: 'var(--secondary)' }}>Shapes</span>
            </div>
          </div>

          <nav className="nav" style={{ flex: '1 1 auto', justifyContent: 'center', overflow: 'hidden', minWidth: 0 }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap', justifyContent: 'center', gap: 25 }}>
              <li><a href="#home" onClick={clearServiceParam} style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Home</a></li>
              <li><a href="#bio" onClick={clearServiceParam} style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>About Us</a></li>
              <li><a href="#services" onClick={clearServiceParam} style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Services</a></li>
              <li><a href="#vaccination" onClick={clearServiceParam} style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Vaccination</a></li>
              <li><a href="#consultation" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Consultation</a></li>
              <li><a href="#payment" onClick={clearServiceParam} style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Payment</a></li>
            </ul>
          </nav>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(v => !v)}
          >
            <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
          </button>

          <a href="#consultation" className="cta" style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 30,
            textDecoration: 'none',
            fontWeight: 600,
            flexShrink: 0,
            whiteSpace: 'nowrap'
          }}>Book Appointment</a>
        </div>
        {mobileOpen && (
          <div className="mobile-menu" style={{ backgroundColor: 'white', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '8px 16px' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '10px 0' }}><a href="#home" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600 }} onClick={() => { clearServiceParam(); setMobileOpen(false) }}>Home</a></li>
              <li style={{ margin: '10px 0' }}><a href="#bio" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600 }} onClick={() => { clearServiceParam(); setMobileOpen(false) }}>About Us</a></li>
              <li style={{ margin: '10px 0' }}><a href="#services" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600 }} onClick={() => { clearServiceParam(); setMobileOpen(false) }}>Services</a></li>
              <li style={{ margin: '10px 0' }}><a href="#vaccination" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600 }} onClick={() => { clearServiceParam(); setMobileOpen(false) }}>Vaccination</a></li>
              <li style={{ margin: '10px 0' }}><a href="#consultation" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600 }} onClick={() => setMobileOpen(false)}>Consultation</a></li>
              <li style={{ margin: '10px 0' }}><a href="#payment" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600 }} onClick={() => { clearServiceParam(); setMobileOpen(false) }}>Payment</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header