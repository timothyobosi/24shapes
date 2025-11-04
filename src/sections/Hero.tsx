const Hero = () => {
  return (
    <section id="home" style={{
      background: 'linear-gradient(rgba(44, 127, 184, 0.8), rgba(44, 127, 184, 0.9)), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: 20 }}>
          24 Shapes Laboratory: Precise testing for a healthier you.
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 700, margin: '0 auto 30px' }}>
          Where precision takes shape. We deliver accurate, timely diagnostic testing to help you and your doctor make informed health decisions.
        </p>
        <a href="#services" style={{
          backgroundColor: 'var(--primary)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: 30,
          textDecoration: 'none',
          fontWeight: 600
        }}>Our Services</a>
      </div>
    </section>
  )
}

export default Hero