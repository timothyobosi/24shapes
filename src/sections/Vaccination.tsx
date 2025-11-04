// src/sections/Vaccination.tsx
import React from 'react';
import Container from '../components/Container';
import styles from './Vaccination.module.css';

interface Vaccine {
  name: string;
  description: string;
  recommended: string;
  price: string;
}

const vaccines: Vaccine[] = [
  { name: 'BCG', description: 'Tuberculosis vaccine', recommended: 'Infants at birth', price: '500' },
  // Add all
];

const Vaccination: React.FC = () => {
  return (
    <section className={styles.vaccination} id="vaccination">
      <Container>
        <div className={styles.sectionTitle}>
          <h2>Vaccination & Immunization</h2>
        </div>
        <p className={styles.intro}>We offer a comprehensive range of vaccines...</p>
        <table className={styles.vaccinationTable}>
          <thead>
            <tr>
              <th>Vaccine Name</th>
              <th>Description</th>
              <th>Recommended For</th>
              <th>Price (KES)</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((v, index) => (
              <tr key={index}>
                <td>{v.name}</td>
                <td>{v.description}</td>
                <td>{v.recommended}</td>
                <td className={styles.price}>{v.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.ctaWrapper}>
          <a href="#consultation" className={styles.ctaButton}>Schedule Vaccination</a>
        </div>
      </Container>
    </section>
  );
};

export default Vaccination;