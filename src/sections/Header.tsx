import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '8px 0', fontSize: '0.9rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><FontAwesomeIcon icon={faPhone} /> +254 700 123 456</span>
          <span><FontAwesomeIcon icon={faClock} /> Open 24/7</span>
        </div>
      </div>

      <div style={{ padding: '15px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
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

          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
              {['Home', 'About Us', 'Services', 'Vaccination', 'Consultation', 'Payment'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`
                return (
                  <li key={item} style={{ marginLeft: 25 }}>
                    <Link to={path} style={{
                      textDecoration: 'none',
                      color: 'var(--dark)',
                      fontWeight: 600,
                      transition: 'color 0.3s'
                    }}>{item}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Link to="/consultation" style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 30,
            textDecoration: 'none',
            fontWeight: 600
          }}>Book Appointment</Link>
        </div>
      </div>
    </header>
  )
}

export default Header