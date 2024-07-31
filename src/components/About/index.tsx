import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Link, animateScroll as scroll } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';

export const About = () => {
  const t = useTranslations()
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className={styles.about}>
      <div className={styles.about__cards}>
        <div className={styles.about__card}>Создаём</div>   
        <div className={styles.about__card}>Реализуем</div>
        <div className={styles.about__card}>Продвигаем</div>
      </div> 

      <div className={styles.about__services}>
        <p className={styles.about__title}>Услуги</p>
        <div className={styles.about__media}>
            <div className={styles.about__name}>Дизайн</div>
            <div className={styles.about__info}>
                <div className={styles.about__list}>
                    <ul className={styles.about__menu}>
                        <div className={styles.about__listCont}>
                            <Image src={'/assets/img/triangle.png'} alt='tirangle'width={13.21} height={11.44}/>
                        <li>Посты для социальных сетей</li>
                        </div>
                        <div className={styles.about__listCont}>
                            <Image src={'/assets/img/triangle.png'} alt='tirangle'width={13.21} height={11.44}/>
                            <li>Motion ролики</li>
                        </div>
                        <div className={styles.about__listCont}>
                            <Image src={'/assets/img/triangle.png'} alt='tirangle'width={13.21} height={11.44}/>
                            <li>Брендинг</li>
                        </div>

                        <div className={styles.about__listCont}>
                            <Image src={'/assets/img/triangle.png'} alt='tirangle'width={13.21} height={11.44}/>
                            <li>Дизайн наружной рекламы</li>
                        </div>

                        <div className={styles.about__listCont}>
                            <Image src={'/assets/img/triangle.png'} alt='tirangle'width={13.21} height={11.44}/>
                            <li>3D моделирование</li>
                        </div>

                        <div className={styles.about__listCont}>
                            <Image src={'/assets/img/triangle.png'} alt='tirangle'width={13.21} height={11.44}/>
                            <li>VFX - ролики</li>
                        </div>

                        <div className={styles.about__listCont}>
                            <Image src={'/assets/img/triangle.png'} alt='tirangle'width={13.21} height={11.44}/>
                            <li>Дизайн печатной продукции</li>
                        </div>
                    </ul>
                </div>
                <div className={styles.about__img}></div>
            </div>
        </div>
      </div>
    </div>
  )
}
