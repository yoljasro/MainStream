import React from 'react'
import styles from './index.module.sass'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Footer = () => {
  const t = useTranslations()

  return (
    <div className={styles.footer}>
      <div className={styles.footer__location}>
        <p className={styles.footer__number}>+998 90 981 23 56</p>
        <p className={styles.footer__number}>+998 90 024 44 48</p>
        <p className={styles.footer__email}>mainstream.uz@gmail.com</p>
        <p className={styles.footer__adress}>Узбекистан, г. Ташкент,   Чиланзар 3, 44/1</p>
      </div>

      <div className={styles.footer__social}>
      </div>

      <div className={styles.footer__menu}>
        <ul>
          <li>О компании</li>
          <li>Услуги</li>
          <li>Кейсы</li>
          <li>Контакты</li>
          <li>Курсы</li>
        </ul>
      </div>
    </div>
  )
}
