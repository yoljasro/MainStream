import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export const Lang = () => {
    const [animateOut, setAnimateOut] = useState(false);
    const t = useTranslations();
    const router = useRouter();

    const handleChangeLanguage = (nextLanguage:any) => {
        setAnimateOut(true); // Animatsiyani boshlash
        setTimeout(() => {
            router.push(router.asPath, undefined, {
                locale: nextLanguage,
            }); // Tilni almashtirish
            setAnimateOut(false); // Animatsiyani tugatish
        }, 300); 
    };

    return (
        <div className={styles.lang}>
            <div className={styles.lang__select}>
                <span className={styles.lang__selected}>{router.locale?.toUpperCase()}</span>
                <span className={`${styles.lang__options} ${animateOut ? styles.animateOut : ''}`}>
                    <span onClick={() => handleChangeLanguage('ru')}>RU</span>
                    <span onClick={() => handleChangeLanguage('uz')}>UZ</span>
                    <span onClick={() => handleChangeLanguage('en')}>ENG</span>
                </span>
            </div>
        </div>
    );
};
