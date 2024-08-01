import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Link, animateScroll as scroll } from "react-scroll";
import { Lang } from '../Lang';
import Image from 'next/image';
import { LiaCalculatorSolid } from "react-icons/lia";

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
                <div className={styles.about__mediaContainer}>
                    <div className={styles.about__media}>
                        <div className={styles.about__name}>Дизайн</div>
                        <div className={styles.about__info}>
                            <div className={styles.about__list}>
                                <ul className={styles.about__menu}>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Посты для социальных сетей</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Motion ролики</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Брендинг</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн наружной рекламы</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>3D моделирование</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>VFX - ролики</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн печатной продукции</li>
                                    </div>
                                </ul>
                            </div>
                            <div className={styles.about__img}></div>
                        </div>
                    </div>

                    <div className={styles.about__media}>
                        <div className={styles.about__info}>
                            <div className={styles.about__list}>
                                <ul className={styles.about__menu}>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Посты для социальных сетей</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Motion ролики</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Брендинг</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн наружной рекламы</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>3D моделирование</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>VFX - ролики</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн печатной продукции</li>
                                    </div>
                                </ul>
                            </div>
                            <div className={styles.about__img}></div>
                        </div>
                        <div className={styles.about__name}>Маркетинг</div>




                    </div>

                    <div className={styles.about__media}>
                        <div className={styles.about__nametwo} >Видео-продакшн</div>

                        <div className={styles.about__info}>
                            <div className={styles.about__list}>
                                <ul className={styles.about__menu}>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Посты для социальных сетей</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Motion ролики</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Брендинг</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн наружной рекламы</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>3D моделирование</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>VFX - ролики</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн печатной продукции</li>
                                    </div>
                                </ul>
                            </div>
                            <div className={styles.about__imgtwo}></div>
                        </div>



                    </div>

                    <div className={styles.about__media}>
                        <div className={styles.about__info}>
                            <div className={styles.about__list}>
                                <ul className={styles.about__menu}>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Посты для социальных сетей</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Motion ролики</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Брендинг</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн наружной рекламы</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>3D моделирование</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>VFX - ролики</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн печатной продукции</li>
                                    </div>
                                </ul>
                            </div>
                            <div className={styles.about__imgit}></div>
                        </div>
                        <div className={styles.about__nameit}>IT-разработки</div>

                    </div>

                    <div className={styles.about__media}>
                        <div className={styles.about__namelast} ></div>

                        <div className={styles.about__info}>
                            <div className={styles.about__list}>
                                <ul className={styles.about__menu}>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Посты для социальных сетей</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Motion ролики</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Брендинг</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн наружной рекламы</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>3D моделирование</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>VFX - ролики</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн печатной продукции</li>
                                    </div>
                                </ul>
                            </div>
                            <div className={styles.about__imglast}></div>
                        </div>


                    </div>
                </div>
            </div>

            <div className={styles.about__calc}>
                <div className={styles.about__calcCont}>
                    <div className={styles.about__calcBtn}><LiaCalculatorSolid className={styles.about__icon} />
                    <p className={styles.about__calcText}>Калькулятор услуг</p>
                    </div>
                    <div className={styles.about__line}></div>
                    <p className={styles.about__desc}>Онлайн калькулятор поможет посчитать сколько стоят интересующие Вас услуги</p>
                </div>
            </div>
        </div>
    )
}
