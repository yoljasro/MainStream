import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export const InNumbers = () => {
    const t = useTranslations()

    return (
        <div className={styles.navbar}>
            <div>
                <p>4+</p>
                <p>{t("statistic.market")}</p>
            </div>
            <div>
                <p>3</p>
                <p>{t("statistic.filial")}</p>
            </div>
            <div>
                <p>150+</p>
                <p>{t("statistic.projects")}</p>
            </div>
            <div>
                <p>15K</p>
                <p>{t("statistic.advertising")}</p>
            </div>
            <div>
                <p>25+</p>
                <p>{t("statistic.employees")}</p>
            </div>
            <div>
                <p>200K </p>
                <p>{t("statistic.lead")}</p>
            </div>
            <div>
                <p>1,126  МЛРД </p>
                <p>{t("statistic.videos")}</p>
            </div>
            <div>
                <p>3,49 МЛН </p>
                <p>{t("statistic.followers")}</p>
            </div>
            <div>
                <p>3,49 МЛН </p>
                <p>{t("statistic.cost")}</p>
            </div>
        </div>
    )
}
