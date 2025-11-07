import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin,faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer style={{ background: 'var(--dark)', color: 'white', padding: '60px 0 20px' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 40, marginBottom: 40 }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 20 }}>24 Shapes Laboratory</h3>
          <p>Providing accurate and reliable medical laboratory services with a commitment to quality and patient care.</p>
          <div style={{ marginTop: 20, display: 'flex', gap: 15 }}>
            <a href="https://www.facebook.com/share/1CecEamTW6/" style={{ color: 'white', fontSize: '1.2rem' }} aria-label="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} aria-label="twitter">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} aria-label="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" style={{ color: 'white', fontSize: '1.2rem' }} aria-label="linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 20 }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#home" style={{ color: '#bbb', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#bio" style={{ color: '#bbb', textDecoration: 'none' }}>About Us</a></li>
            <li><a href="#services" style={{ color: '#bbb', textDecoration: 'none' }}>Our Services</a></li>
            <li><a href="#vaccination" style={{ color: '#bbb', textDecoration: 'none' }}>Vaccination</a></li>
            <li><a href="#consultation" style={{ color: '#bbb', textDecoration: 'none' }}>Book Appointment</a></li>
            <li><a href="#payment" style={{ color: '#bbb', textDecoration: 'none' }}>Payment Options</a></li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 20 }}>Contact Us</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: 10 }}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10, color: 'var(--secondary)' }} />123 Medical Plaza, Nairobi, Kenya</li>
            <li style={{ marginBottom: 10 }}><FontAwesomeIcon icon={faPhone} style={{ marginRight: 10, color: 'var(--secondary)' }} />+254 719 830 928</li>
            <li style={{ marginBottom: 10 }}><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 10, color: 'var(--secondary)' }} />info@24shapeslab.co.ke</li>
            <li><FontAwesomeIcon icon={faClock} style={{ marginRight: 10, color: 'var(--secondary)' }} />Open 24/7</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: 20, borderTop: '1px solid #444', fontSize: '0.9rem', color: '#bbb' }}>
        <p>&copy; 2023 |  24Shapes Laboratory. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer