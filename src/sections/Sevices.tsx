import React from 'react';
import Container from '../components/Container';
import ServiceCard from '../components/ServiceCard';
import { faVial} from '@fortawesome/free-solid-svg-icons';
import styles from './Services.module.css';

const services = [
  { icon: faVial, title: 'Blood Tests', description: '...', ctaText: 'Book Test', to: '/consultation' },
  // Add others
];

const Services: React.FC = () => {
  return (
    <section className={styles.services} id="services">
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