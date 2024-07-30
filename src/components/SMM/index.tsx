import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Image from 'next/image';

export const SMM = () => {
    const t = useTranslations()

    return (
        <div className={styles.smm}>    
        </div>
    )
}
