import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Link, animateScroll as scroll } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';

export const Navbar = () => {
  const t = useTranslations()
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className={styles.navbar}>
      <Image src={'/assets/img/logoorg.png'} alt='logo' width={301} height={30}/>
      <ul className={styles.navbar__menu}>
        <li className={styles.navbar__bar}>
          <Link
            activeClass="active"
            to="company"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navbar__link} 
          >
            {t("menu.company")}
          </Link>
        </li>
        <li className={styles.navbar__bar}>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navbar__link}
          >
            {t("menu.services")}
          </Link>
        </li>
        <li className={styles.navbar__bar}>
          <Link
            activeClass="active"
            to="cases"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navbar__link}
          >
            {t("menu.cases")} 
          </Link>
        </li>
        <li className={styles.navbar__bar}>
          <Link 
            activeClass="active"
            to="cases"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navbar__link}
          >
            {t("menu.courses")} 
          </Link>
        </li>
      </ul>
      <Lang />
    </div>
  )
}
