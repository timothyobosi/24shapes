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
  { name: 'OPV', description: 'Oral Polio Vaccine', recommended: 'Children (multiple doses)', price: '300' },
  { name: 'Pentavalent', description: 'Diphtheria, Tetanus, Pertussis, Hepatitis B, Hib', recommended: 'Children (multiple doses)', price: '1,200' },
  { name: 'PCV', description: 'Pneumococcal Conjugate Vaccine', recommended: 'Children (multiple doses)', price: '1,500' },
  { name: 'Rotavirus', description: 'Oral vaccine against rotavirus diarrhea', recommended: 'Children (multiple doses)', price: '1,800' },
  { name: 'Measles-Rubella', description: 'Measles and Rubella vaccine', recommended: 'Children at 9 months', price: '800' },
  { name: 'Yellow Fever', description: 'Yellow fever vaccine', recommended: 'Children & adults (travel)', price: '1,500' },
  { name: 'HPV', description: 'Human Papillomavirus Vaccine', recommended: 'Girls 10-14 years (2 doses)', price: '4,500 per dose' },
  { name: 'Tetanus Toxoid', description: 'Tetanus vaccine', recommended: 'Pregnant women & adults', price: '600' },
  { name: 'COVID-19 Vaccine', description: 'Various brands available', recommended: 'Adults and children 12+', price: 'Free' },
  { name: 'Hepatitis B', description: 'Hepatitis B vaccine (adult)', recommended: 'Adults (3 doses)', price: '1,200 per dose' },
  { name: 'Influenza', description: 'Seasonal flu vaccine', recommended: 'Adults & high-risk groups', price: '1,500' },
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
                <td data-label="Vaccine">{v.name}</td>
                <td data-label="Description">{v.description}</td>
                <td data-label="Recommended For">{v.recommended}</td>
                <td className={styles.price} data-label="Price (KES)">{v.price}</td>
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