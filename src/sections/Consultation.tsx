import React, { useEffect } from 'react';
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
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>();

  const onSubmit = () => {
    alert('Thank you for your enquiry! We will contact you shortly.');
    reset();
  };

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const allowed = new Set([
      'blood-test',
      'molecular',
      'microbiology',
      'urine-analysis',
      'cardiac',
      'vaccination',
      'consultation',
      'other',
    ]);

    const applyFromLocation = () => {
      let svc = '';
      const { hash, search } = window.location;
      if (hash && hash.includes('?')) {
        const query = hash.split('?')[1];
        const params = new URLSearchParams(query);
        svc = params.get('service') || '';
      } else if (search) {
        const params = new URLSearchParams(search);
        svc = params.get('service') || '';
      }
      if (svc && allowed.has(svc)) {
        setValue('serviceType', svc, { shouldValidate: true, shouldDirty: false, shouldTouch: false });
      }
    };

    applyFromLocation();
    window.addEventListener('hashchange', applyFromLocation);
    return () => window.removeEventListener('hashchange', applyFromLocation);
  }, [setValue]);

  return (
    <section className={styles.consultation}>
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
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input {...register('lastName', { required: true })} id="lastName" className={styles.formControl} />
                {errors.lastName && <span className={styles.error}>Required</span>}
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" {...register('email', { required: true })} id="email" className={styles.formControl} />
                {errors.email && <span className={styles.error}>Required</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" {...register('phone', { required: true })} id="phone" className={styles.formControl} />
                {errors.phone && <span className={styles.error}>Required</span>}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="serviceType">Service Required</label>
              <select {...register('serviceType', { required: true })} id="serviceType" className={styles.formControl}>
                <option value="">Select a service</option>
                <option value="blood-test">Blood Test</option>
                <option value="molecular">Molecular Diagnostics</option>
                <option value="microbiology">Microbiology</option>
                <option value="urine-analysis">Urine Analysis</option>
                <option value="cardiac">Cardiac Markers</option>
                <option value="vaccination">Vaccination</option>
                <option value="consultation">General Consultation</option>
                <option value="other">Other</option>
              </select>
              {errors.serviceType && <span className={styles.error}>Required</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message / Additional Information</label>
              <textarea {...register('message')} id="message" className={styles.formControl} placeholder="Please provide any specific details about your request..." />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="preferredDate">Preferred Date</label>
              <input type="date" {...register('preferredDate', { required: true, validate: (v) => v >= today })} id="preferredDate" className={styles.formControl} min={today} />
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