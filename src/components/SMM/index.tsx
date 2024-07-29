import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Image from 'next/image';

export const SMM = () => {
    const t = useTranslations()

    return (
        <div className={styles.smm}>    
           <Image className={styles.smm__image} src={'/assets/img/smm.png'} alt='smm'  width={1900} height={1300}/>
        </div>
    )
}
