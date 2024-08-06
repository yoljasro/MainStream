import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useTranslations } from "next-intl";
import { Link, animateScroll as scroll } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';

export const Service = () => {
  const t = useTranslations()

  return (
    <div className={styles.service}>
      <div className={styles.service__cont}>
        <p className={styles.service__text}>{t("statistic.info")} </p>
      </div>
      <div className={styles.service__img}>
        <Image src={'/assets/img/bigmainlogo.svg'} alt='image' width={260} height={144} />
      </div>
    </div>
  )
}
