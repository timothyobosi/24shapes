import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../components/Container';
import styles from './Consultation.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  message?: string;
  preferredDate: string;
}

const Consultation: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert('Thank you for your enquiry! We will contact you shortly.');
    reset();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className={styles.consultation} id="consultation">
      <Container>
        <div className={styles.sectionTitle}>
          <h2>Consultation & Enquiry</h2>
        </div>
        <div className={styles.consultationForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input {...register('firstName', { required: true })} id="firstName" className={styles.formControl} />
                {errors.firstName && <span className={styles.error}>Required</span>}
              </div>
              {/* Similar for other fields */}
            </div>
            {/* Add all fields with register and errors */}
            <div className={styles.formGroup}>
              <label htmlFor="preferredDate">Preferred Date</label>
              <input type="date" {...register('preferredDate', { required: true, min: today })} id="preferredDate" className={styles.formControl} min={today} />
              {errors.preferredDate && <span className={styles.error}>Required, future date</span>}
            </div>
            <div className={styles.ctaWrapper}>
              <button type="submit" className={styles.ctaButton}>Submit Request</button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Consultation;