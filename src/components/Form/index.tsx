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
          <Image className={styles.info__logo} src={'/assets/img/logoorg.png'} alt='logoorg' width={356} height={32} />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            name='name'
            className={styles.form__input}
            onChange={handleChange}
            value={formData.name}
            id="standard-basic" label="Руслан Мариарти"
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #FFFFFF', // Chiziq rangi oq
              },
              '& .MuiInputLabel-root': {
                color: '#5B539D',
                fontSize: '25px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'center', // Labelni markazlashtirish
                width: '100%', // Labelning kengligini 100% qilib, markazlashtirilgan
              },
              width: '700px', // TextFieldning kengligi
              '& .MuiInputBase-root': {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                color: '#FFFFFF !important',
                paddingLeft: '85px',
                fontSize: '24px !important',
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
            label="+998 (90) 024 44 48"
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #FFFFFF', // Chiziq rangi oq
              },
              '& .MuiInputLabel-root': {
                color: '#5B539D',
                fontSize: '25px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'center', // Labelni markazlashtirish
                width: '100%', // Labelning kengligini 100% qilib, markazlashtirilgan
              },
              width: '700px', // TextFieldning kengligi
              '& .MuiInputBase-root': {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                color: '#FFFFFF !important',
                paddingLeft: '85px',
                fontSize: '24px !important',
              },
            }}
          />
          <TextField
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.form__input}
            id="standard-basic"
            label="Название компании"
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #FFFFFF', // Chiziq rangi oq
              },
              '& .MuiInputLabel-root': {
                color: '#5B539D',
                fontSize: '25px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'center', // Labelni markazlashtirish
                width: '100%', // Labelning kengligini 100% qilib, markazlashtirilgan
              },
              width: '700px', // TextFieldning kengligi
              '& .MuiInputBase-root': {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                color: '#FFFFFF !important',
                paddingLeft: '85px',
                fontSize: '24px !important',
              },
            }}
          />
          <Button variant='contained' type="submit" className={styles.form__submit}>Отправить</Button>
        </form>
      </div>
    </div>
  );
};

