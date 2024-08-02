// components/SMM.tsx

import React from 'react';
import styles from './index.module.sass';
import { useTranslations } from 'next-intl';
import { useSpring, animated } from 'react-spring';

export const SMM = ({ inView }: { inView: boolean }) => {
    const t = useTranslations();

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
    });

    return (
        <animated.div style={animation} className={styles.container}>
            <div className={styles.container__smm}></div>
        </animated.div>
    );
};
