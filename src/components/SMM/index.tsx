import React from 'react';
import styles from './index.module.sass';
import { useTranslations } from 'next-intl';
import { Fade, Zoom, Flip } from "react-reveal";

export const SMM = () => {
    const t = useTranslations();

    return (
        <Fade  cascade>
        <div className={styles.container}>
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
        </div>
        </Fade>
    );
};
