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
        <div className={styles.about} >
            <div className={styles.about__cards}>
                <div className={styles.about__card}>{t("statistic.workcycle.create")}</div>
                <div className={styles.about__card}>{t("statistic.workcycle.realling")}</div>
                <div className={styles.about__card}>{t("statistic.workcycle.promotion")}</div>
            </div>

            <div className={styles.about__services} id='services'>
                <p className={styles.about__title}>{t("statistic.services.title")}</p>
                <div className={styles.about__mediaContainer}>
                    <div className={styles.about__media}>
                        <div className={styles.about__name}>{t("statistic.services.design")}</div>
                        <div className={styles.about__info}>
                            <div className={styles.about__list}>
                                <ul className={styles.about__menu}>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.posts")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.motion")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.branding")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.advertising")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.modeling")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.vfx")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.printProduct")}</li>
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
                                        <li>{t("statistic.services.strategy")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.target")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.smm")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.copywriting")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.analytic")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.brand")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.influence")}</li>
                                    </div>
                                </ul>
                            </div>
                            <div className={styles.about__imgmarketing}></div>
                        </div>
                        <div className={styles.about__name}>{t("statistic.services.marketing")}</div>

                    </div>

                    <div className={styles.about__media}>
                        <div className={styles.about__nametwo} >{t("statistic.services.video")}</div>

                        <div className={styles.about__info}>
                            <div className={styles.about__list}>
                                <ul className={styles.about__menu}>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.shooting")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.photo")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.reels")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.commercials")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.storymaking")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.dron")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.editing")}</li>
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
                                        <li>{t("statistic.services.landing")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.corporate")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Брендинг</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.seo")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.banner")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.app")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.search")}</li>
                                    </div>
                                </ul>
                            </div>
                            <div className={styles.about__imgit}></div>
                        </div>
                        <div className={styles.about__nameit}>{t("statistic.services.IT")}</div>

                    </div>

                    <div className={styles.about__media}>
                        <div className={styles.about__namelast} >{t("statistic.services.bot")}</div>

                        <div className={styles.about__info}>
                            <div className={styles.about__list}>
                                <ul className={styles.about__menu}>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.development")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.appConect")}</li>
                                    </div>
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.traffic")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.technicial")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.chatbots")}</li>
                                    </div>

                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>{t("statistic.services.integration")}</li>
                                    </div>
{/* 
                                    <div className={styles.about__listCont}>
                                        <Image src={'/assets/img/triangle.png'} alt='tirangle' width={13.21} height={11.44} />
                                        <li>Дизайн печатной продукции</li>
                                    </div> */}
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
