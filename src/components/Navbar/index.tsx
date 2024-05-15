import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Link, animateScroll as scroll } from "react-scroll";
import { Lang } from '../Lang';

export const Navbar = () => {
  const t = useTranslations()
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className={styles.navbar}>
      <h1>Logo</h1>
      <ul className={styles.navbar__menu}>
        <li>
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
        <li>
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
        <li>
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
        <li>
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
