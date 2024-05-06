import React, { useState , useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Lang } from '../Lang';

export const Navbar = () => {
    const t = useTranslations()

  return (
    <div className={styles.navbar}>
        <h1>Logo</h1>
        <ul className={styles.navbar__menu}>
            <li>{t("menu.company")}</li>
            <li>{t("menu.services")}</li>
            <li>{t("menu.cases")}</li>
            <li>{t("menu.courses")}</li>
        </ul>
        <Lang/>
    </div>
  )
}
