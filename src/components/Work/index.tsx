import React from 'react';
import styles from './index.module.sass';
import { useTranslations } from "next-intl";

export const Work = () => {
    const t = useTranslations()

    return (
        <div className={styles.work}>
            <div className={styles.work__title}>Этапы работы</div>
            {/* <div className={styles.work__sectionContainer}> */}
                <div className={styles.work__section}>
                    <div className={styles.work__stage}>
                        <div className={styles.work__info}>
                            <p className={styles.work__number}>1</p>
                            <p className={styles.work__desc}>Аудит вашего бизнеса</p>
                        </div>

                        <div className={styles.work__info}>
                            <p className={styles.work__number}>2</p>
                            <p className={styles.work__desc}>Определяем бюджет на продвижение</p>
                        </div>

                        <div className={styles.work__info}>
                            <p className={styles.work__number}>3</p>
                            <p className={styles.work__desc}>Определяем цели и показатели KPI</p>
                        </div>

                        <div className={styles.work__info}>
                            <p className={styles.work__number}>4</p>
                            <p className={styles.work__desctwo}>Разрабатываем стратегию продвижения  и план работы, концепцию и медиа план</p>
                        </div>

                        <div className={styles.work__info}>
                            <p className={styles.work__numberlast}>5</p>
                            <p className={styles.work__desclast}>Приступаем к реализации </p>
                        </div>
                    </div>

                    <p className={styles.work__subtitle}>Каждый наш проект выполняется профессионально благодаря нашему   опыту в различных областях. У нас установлен четкий и эффективный регламент работы с каждой нишей, и мы несем ответственность за его выполнение.</p>
                </div>

                <div className={styles.work__sectiontwo}></div>
            {/* </div> */}
        </div>
    )
}
