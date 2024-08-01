// components/ContactForm.tsx

import React, { useState } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';

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
          <p className={styles.info__title}>Остались вопросы?</p>
          <p className={styles.info__description}>Оставьте контактные данные, наши менеджеры свяжутся с Вами и проконсультируют</p>
          <Image className={styles.info__logo} src={'/assets/img/logoorg.png'} alt='logoorg' width={356} height={32}/>
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

