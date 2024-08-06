import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Link, animateScroll as scroll } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';
import { Zoom, Fade } from "react-reveal";

export const Navbar = () => {
  const t = useTranslations()
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className={styles.navbar}>
         <Fade left cascade>
      <Image src={'/assets/img/logowhite.svg'} alt='logo' width={301} height={30}/>
      </Fade>
      <Fade right cascade>
      <div className={styles.navbar__section}>
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
            to="partners"
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
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navbar__link}
          >
            {t("menu.contact")} 
          </Link>
        </li>
      </ul>

      <Lang />
      <div className={styles.navbar__course}>{t("menu.courses")}</div>
      </div>
      </Fade>
    </div>
  )
}
