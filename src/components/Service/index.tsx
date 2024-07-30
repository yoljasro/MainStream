import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Link, animateScroll as scroll } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';

export const Service = () => {
  const t = useTranslations()
  const router = useRouter();

  return (
    <div className={styles.service}>
      <div className={styles.service__cont}>
        <p className={styles.service__text}>Mainstream -  быстро развивающееся агентство полного цикла, где каждая деталь проработала до совершенства,  для достижения высоких результатов наших клиентов. </p>
      </div>
      <div className={styles.service__img}>
        {/* <Image src={'/assets/img/logomain.jpg'} alt='image' width={250} height={200} /> */}
      </div>
    </div>
  )
}
