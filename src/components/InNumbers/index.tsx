import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Image from 'next/image';

export const InNumbers = () => {
    const t = useTranslations()

    return (
        <div className={styles.numbers}>
            <Image className={styles.numbers__mainstream} src={'/assets/img/mainstream.png'} alt='mainstream' width={1202} height={150} />
            <Image className={styles.numbers__numb} src={'/assets/img/numb.png'} alt='mainstream' width={1000} height={150} />

            <div className={styles.numbers__cards}>
                <div className={styles.numbers__card}>
                    <p>4+</p>
                    <p>{t("statistic.market")}</p>
                </div>
                <div className={styles.numbers__card}>
                    <p>3</p>
                    <p>{t("statistic.filial")}</p>
                </div>
                <div className={styles.numbers__card}>
                    <p>150+</p>
                    <p>{t("statistic.projects")}</p>
                </div>
                <div className={styles.numbers__card}>
                    <p>15K</p>
                    <p>{t("statistic.advertising")}</p>
                </div>
                <div className={styles.numbers__card}>
                    <p>25+</p>
                    <p>{t("statistic.employees")}</p>
                </div>
                <div className={styles.numbers__card}>
                    <p>200K </p>
                    <p>{t("statistic.lead")}</p>
                </div>
                <div className={styles.numbers__card}>
                    <p>1,126  МЛРД </p>
                    <p>{t("statistic.videos")}</p>
                </div>
                <div className={styles.numbers__card}>
                    <p>3,49 МЛН </p>
                    <p>{t("statistic.followers")}</p>
                </div>
                <div className={styles.numbers__card}>
                    <p>3,49 МЛН </p>
                    <p>{t("statistic.cost")}</p>
                </div>
            </div>
        </div>
    )
}
