import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa6";


export const Partners = () => {
    const t = useTranslations()

    return (
        <div className={styles.partners} id='partners'>
          <p className={styles.partners__title}>Нам доверяют</p>
          <div className={styles.partners__carousel}>
            <div className={styles.partners__slideone}></div>
            <div className={styles.partners__slidetwo}></div>
          </div>
          <p className={styles.partners__desc}>Ценности нашей компании это долгосрочное и плодотворное партнёрство.</p>
          <div className={styles.partners__section}>
          <Image src={'/assets/img/logoorg.png'} alt='logo' width={301} height={27}/>
          <div className={styles.partners__line}></div>
          <div className={styles.partners__insta}>
          <FaInstagram className={styles.partners__icon} />
          <p className={styles.partners__text}>Детальнее работы в ленте  instagram   нашего агенства </p>
          </div>
          </div>
        </div>
    )
}
