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
  service?: string; // optional slug e.g., 'molecular'
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, ctaText, to, service }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!service) {
      // Clear any lingering service param when navigating to other sections
      const url = new URL(window.location.href);
      if (url.searchParams.has('service')) {
        url.searchParams.delete('service');
        history.replaceState(null, '', url.toString());
      }
      return; // allow default navigation
    }
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set('service', service);
    // Update search without reload
    history.replaceState(null, '', url.toString());
    // Ensure we navigate to the consultation anchor and trigger hashchange
    if (window.location.hash !== '#consultation') {
      window.location.hash = 'consultation';
    } else {
      // Already at #consultation; smooth scroll and notify listeners
      const el = document.getElementById('consultation');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  };
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.serviceContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={service ? '#consultation' : to} className={styles.ctaButton} onClick={handleClick}>{ctaText}</a>
      </div>
    </div>
  );
};

export default ServiceCard;