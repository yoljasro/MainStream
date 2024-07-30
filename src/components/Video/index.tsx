import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Link, animateScroll as scroll } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';

export const Video = () => {
  const t = useTranslations()
  const router = useRouter();

  return (
    <div className={styles.video}>
        <p className={styles.video__text}>Ролик Шоу рил</p>
    </div>
  )
}