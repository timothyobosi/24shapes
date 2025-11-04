import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ServiceCard.module.css';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ServiceCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  ctaText: string;
  to: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, ctaText, to }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.serviceContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={to} className={styles.ctaButton}>{ctaText}</a>
      </div>
    </div>
  );
};

export default ServiceCard;