import React from 'react';
import styles from './index.module.sass';
import { useTranslations } from 'next-intl';
import { ParallaxLayer } from '@react-spring/parallax';

export const SMM = () => {
    const t = useTranslations();

    return (
        <ParallaxLayer offset={1} speed={0.5} className={styles.container}>
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
        </ParallaxLayer>
    );
};
