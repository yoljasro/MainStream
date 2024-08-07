import React, { useState } from 'react';
import styles from './index.module.sass';
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';
import { Fade } from "react-reveal";

export const Navbar = () => {
  const t = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.navbar} ${menuOpen ? styles.navbar_open : ''}`}>
      <div className={styles.navbar__header}>
        <Fade left cascade>
          <a href="/">
          <Image className={styles.navbar__logo} src={'/assets/img/logowhite.svg'} alt='logo' width={301} height={30} />
          </a>
        </Fade>
        <button className={styles.navbar__toggle} onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <Fade right cascade>
        <div className={`${styles.navbar__section} ${menuOpen ? styles.navbar__section_open : ''}`}>
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
  );
};
