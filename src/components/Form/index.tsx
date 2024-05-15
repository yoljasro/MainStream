// components/ContactForm.tsx

import React, { useState } from 'react';
import styles from './index.module.sass';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Bu erda ma'lumotlarni backenda jo'natish logikasini qo'shishingiz mumkin
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.info__title}>Contact Us</h2>
          <p className={styles.info__description}>Please fill out the form below to get in touch with us.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.form__input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.form__input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={styles.form__input}
          />
          <button type="submit" className={styles.form__submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

