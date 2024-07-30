import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Image from 'next/image';

export const Partners = () => {
    const t = useTranslations()

    return (
        <div className={styles.partners}>
          <p className={styles.partners__title}>Нам доверяют</p>
          <div className={styles.partners__carousel}>
            <div className={styles.partners__slideone}></div>
            <div className={styles.partners__slidetwo}></div>
          </div>
        </div>
    )
}
