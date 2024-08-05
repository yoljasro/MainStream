// components/ContactForm.tsx

import React, { useState } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    <div className={styles.container} id='contact'>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.info__title}>Остались вопросы?</p>
          <p className={styles.info__description}>Оставьте контактные данные, наши менеджеры свяжутся с Вами и проконсультируют</p>
          <Image className={styles.info__logo} src={'/assets/img/logoorg.svg'} alt='logoorg' width={356} height={32} />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            name='name'
            className={styles.form__input}
            onChange={handleChange}
            placeholder='Руслан Мариарти'
            value={formData.name}
            // id="standard-basic" label="Руслан Мариарти"
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #FFFFFF', // Underline color
              },
              '& .MuiInputLabel-root': {
                color: '#5B539D',
                fontSize: '25px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'center', // Center the label text
                width: '100%', // Full width for centering
              },
              '& .MuiInputLabel-root.Mui-focused': {
                display: 'none', // Hide label when focused
              },
              width: '700px', // Width of the TextField
              '& .MuiInputBase-root': {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                color: '#FFFFFF !important',
                paddingLeft: '200px', // Adjust padding as needed
                fontSize: '24px !important',
                textAlign: 'center', // Center text including placeholder
              },
            }}
          />

          <TextField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.form__input}
            id="standard-basic"
            placeholder='+998 (90) 024 44 48'
            // label="+998 (90) 024 44 48"
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #FFFFFF', // Underline color
              },
              '& .MuiInputLabel-root': {
                color: '#5B539D',
                fontSize: '25px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'center', // Center the label text
                width: '100%', // Full width for centering
              },
              '& .MuiInputLabel-root.Mui-focused': {
                display: 'none', // Hide label when focused
              },
              width: '700px', // Width of the TextField
              '& .MuiInputBase-root': {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                color: '#FFFFFF !important',
                paddingLeft: '200px', // Adjust padding as needed
                fontSize: '24px !important',
                textAlign: 'center', // Center text including placeholder
              },
            }}
          />
          <TextField
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder='Название компании'
            onChange={handleChange}
            className={styles.form__input}
            id="standard-basic"
            // label="Название компании"
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #FFFFFF', // Underline color
              },
              '& .MuiInputLabel-root': {
                color: '#5B539D',
                fontSize: '25px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'center', // Center the label text
                width: '100%', // Full width for centering
              },
              '& .MuiInputLabel-root.Mui-focused': {
                display: 'none', // Hide label when focused
              },
              width: '700px', // Width of the TextField
              '& .MuiInputBase-root': {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                color: '#FFFFFF !important',
                paddingLeft: '200px', // Adjust padding as needed
                fontSize: '24px !important',
                textAlign: 'center', // Center text including placeholder
              },
            }}
          />
          <Button variant='contained' type="submit" className={styles.form__submit}>Отправить</Button>
        </form>
      </div>
    </div>
  );
};

