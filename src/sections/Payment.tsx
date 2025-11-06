import React from 'react';
import Container from '../components/Container';
import styles from './Payment.module.css';

const Payment: React.FC = () => {
  const options = [
    { icon: '💳', title: 'Credit/Debit Card', desc: 'Visa, MasterCard, American Express' },
    { icon: '📱', title: 'Mobile Money', desc: 'M-Pesa, Airtel Money, T-Kash' },
    { icon: '🏦', title: 'Bank Transfer', desc: 'Direct bank transfer' },
    { icon: '💵', title: 'Cash', desc: 'Pay at our facility' },
  ];

  return (
    <section className={styles.payment}>
      <Container>
        <div className={styles.sectionTitle}>
          <h2>Payment Options</h2>
        </div>
        <p className={styles.intro}>We offer multiple secure payment options for your convenience.</p>
        <div className={styles.options}>
          {options.map((o) => (
            <div key={o.title} className={styles.option}>
              <div className={styles.optionIcon}>{o.icon}</div>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Payment;
