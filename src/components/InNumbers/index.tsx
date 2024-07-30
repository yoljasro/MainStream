import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Image from 'next/image';

export const InNumbers = () => {
    const t = useTranslations()

    return (
        <div className={styles.numbers}>
            <p className={styles.numbers__title}>Mainstream</p>
            <p className={styles.numbers__numb}> в цифрах</p>

            <div className={styles.numbers__cards}>
                <div className={styles.numbers__cardone}>
                    <p className={styles.numbers__number}>4+</p>
                    <p className={styles.numbers__desc}>{t("statistic.market")}</p>
                </div>
                <div className={styles.numbers__cardone}>
                    <p className={styles.numbers__numbersecond}>3</p>
                    <p className={styles.numbers__descsecond}>{t("statistic.filial")}</p>
                </div>
                <div className={styles.numbers__cardone}>
                    <p className={styles.numbers__number}>150+</p>
                    <p className={styles.numbers__desc}>{t("statistic.projects")}</p>
                </div>
                <div className={styles.numbers__cardone}>
                    <p className={styles.numbers__number}>15K</p>
                    <p className={styles.numbers__desc}>{t("statistic.advertising")}</p>
                </div>
                <div className={styles.numbers__cardone}>
                    <p className={styles.numbers__number}>25+</p>
                    <p className={styles.numbers__desc}>{t("statistic.employees")}</p>
                </div>
                <div className={styles.numbers__cardsecond}>
                    <p className={styles.numbers__numbertwo}>200K </p>
                    <p className={styles.numbers__desctwo}>{t("statistic.lead")}</p>
                </div>
                <div className={styles.numbers__cardthird}>
                    <p className={styles.numbers__numbertwo}>1,126 <span className={styles.numbers__span}>МЛРД</span>  </p>
                    <p className={styles.numbers__desctwo}>{t("statistic.videos")}</p>
                </div>
                <div className={styles.numbers__cardfourt}>
                    <p className={styles.numbers__numbertwo}>3,49 <span className={styles.numbers__span}>МЛН</span>  </p>
                    <p className={styles.numbers__desctwo}>{t("statistic.followers")}</p>
                </div>
                <div className={styles.numbers__cardfive}>
                    <p className={styles.numbers__numberlast}>0,01  $  </p>
                    <p className={styles.numbers__desclast}>{t("statistic.cost")}</p>
                </div>
            </div>
        </div>
    )
}
