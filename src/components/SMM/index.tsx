import React, { useRef } from 'react';
import styles from './index.module.sass';
import { useTranslations } from 'next-intl';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

export const SMM = ({ inView }: { inView: boolean }) => {
    const t = useTranslations();
    const videoRef = useRef<HTMLVideoElement>(null);

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
    });

    return (
        <animated.div style={animation} className={styles.container}>
            <div className={styles.container__smm}>
                <div className={styles.container__phone}>
                    <video 
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        src="/assets/video/phonevideo.mp4" 
                        controls={false}
                    />
                </div>
            </div>
        </animated.div>
    );
};
