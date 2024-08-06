import React from 'react';
import styles from './index.module.sass';
import { useTranslations } from 'next-intl';

export const SMM = () => {
    const t = useTranslations();

    return (
            <div className={styles.container__smm}>
                <div className={styles.container__phone}>
                    <video
                        autoPlay
                        loop
                        muted
                        src="/assets/video/phonevideo.mp4"
                        controls={false}
                    />
                </div>
            </div>
    );
};
