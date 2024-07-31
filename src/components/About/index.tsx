import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Link, animateScroll as scroll } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';

export const About = () => {
  const t = useTranslations()
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className={styles.about}>
      <div className={styles.about__cards}>
        <div className={styles.about__card}>Создаём</div>   
        <div className={styles.about__card}>Реализуем</div>
        <div className={styles.about__card}>Продвигаем</div>
      </div> 

      <div className={styles.about__services}>
        <p className={styles.about__title}>Услуги</p>
        <div className={styles.about__media}>
            <div className={styles.about__name}></div>
            <div className={styles.about__info}>
                <div className={styles.about__list}></div>
                <div className={styles.about__img}></div>
            </div>
        </div>
      </div>
    </div>
  )
}
