import React from 'react'
import styles from './index.module.sass'
import { useTranslations } from 'next-intl'

export const Footer = () => {
    const t = useTranslations()
    
  return (
    <div className={styles.footer}>footer</div>
  )
}
    