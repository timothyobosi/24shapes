'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [sparklePositions, setSparklePositions] = useState({
    x1: '30%', y1: '40%',
    x2: '70%', y2: '60%',
    x3: '50%', y3: '30%',
    x4: '20%', y4: '70%',
    x5: '80%', y5: '50%'
  })

  // Update sparkle positions for rapid diagonal movement
  useEffect(() => {
    const updateSparklePositions = () => {
      const time = Date.now() / 390; // Faster movement
      
      // More aggressive diagonal movement patterns
      setSparklePositions({
        // Top-left to bottom-right diagonal
        x1: `${30 + Math.sin(time * 0.8) * 30}%`,
        y1: `${40 + Math.cos(time * 0.8) * 20}%`,
        
        // Bottom-left to top-right diagonal
        x2: `${70 + Math.sin(time * 0.6 + 1) * 25}%`,
        y2: `${60 - Math.cos(time * 0.6 + 1) * 25}%`,
        
        // Center with circular motion
        x3: `${50 + Math.sin(time * 0.7) * 20}%`,
        y3: `${50 - Math.cos(time * 0.7) * 15}%`,
        
        // Diagonal criss-cross
        x4: `${20 + Math.sin(time * 0.5 + 2) * 35}%`,
        y4: `${70 + Math.cos(time * 0.5 + 2) * 20}%`,
        
        // Opposite diagonal
        x5: `${80 + Math.sin(time * 0.9 + 3) * 30}%`,
        y5: `${30 - Math.cos(time * 0.9 + 3) * 15}%`
      });
    };

    // Initial update
    updateSparklePositions();

    // Smooth continuous animation with faster updates
    const animationFrame = requestAnimationFrame(function update() {
      updateSparklePositions();
      frameId = requestAnimationFrame(update);
    });

    let frameId = animationFrame;
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      id="home"
      className={styles.hero}
      style={{
        '--x1': sparklePositions.x1,
        '--y1': sparklePositions.y1,
        '--x2': sparklePositions.x2,
        '--y2': sparklePositions.y2,
        '--x3': sparklePositions.x3,
        '--y3': sparklePositions.y3,
        '--x4': sparklePositions.x4,
        '--y4': sparklePositions.y4,
        '--x5': sparklePositions.x5,
        '--y5': sparklePositions.y5,
      } as React.CSSProperties}
    >
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