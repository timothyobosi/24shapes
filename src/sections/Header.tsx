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
              <li style={{ marginLeft: 25 }}><a href="#home" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Home</a></li>
              <li style={{ marginLeft: 25 }}><a href="#bio" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>About Us</a></li>
              <li style={{ marginLeft: 25 }}><a href="#services" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Services</a></li>
              <li style={{ marginLeft: 25 }}><a href="#vaccination" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Vaccination</a></li>
              <li style={{ marginLeft: 25 }}><a href="#consultation" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Consultation</a></li>
              <li style={{ marginLeft: 25 }}><a href="#payment" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, transition: 'color 0.3s' }}>Payment</a></li>
            </ul>
          </nav>

          <a href="#consultation" style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 30,
            textDecoration: 'none',
            fontWeight: 600
          }}>Book Appointment</a>
        </div>
      </div>
    </header>
  )
}

export default Header