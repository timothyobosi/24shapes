import React from 'react';
import Container from '../components/Container';
import ServiceCard from '../components/ServiceCard';
import { faVial, faDna, faMicroscope, faFlask, faHeartbeat, faSyringe } from '@fortawesome/free-solid-svg-icons';
import styles from './Services.module.css';

const services = [
  { icon: faVial, title: 'Blood Tests', description: 'CBC, lipid, liver, kidney panels and more.', ctaText: 'Book Test', to: '#consultation', service: 'blood-test' },
  { icon: faDna, title: 'Molecular Diagnostics', description: 'PCR, genetic testing, COVID-19 and more.', ctaText: 'Book Test', to: '#consultation', service: 'molecular' },
  { icon: faMicroscope, title: 'Microbiology', description: 'Culture & sensitivity, parasitology, mycology.', ctaText: 'Book Test', to: '#consultation', service: 'microbiology' },
  { icon: faFlask, title: 'Urine Analysis', description: 'Urinalysis, culture, pregnancy tests.', ctaText: 'Book Test', to: '#consultation', service: 'urine-analysis' },
  { icon: faHeartbeat, title: 'Cardiac Markers', description: 'Troponin, CK-MB, BNP and more.', ctaText: 'Book Test', to: '#consultation', service: 'cardiac' },
  { icon: faSyringe, title: 'Immunization', description: 'Certified vaccines for all ages.', ctaText: 'View Prices', to: '#vaccination' },
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <Container>
        <div className={styles.sectionTitle}>
          <h2>Our Services</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
