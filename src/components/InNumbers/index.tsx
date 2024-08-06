import React, { useEffect, useRef } from 'react';
import styles from './index.module.sass';
import { useTranslations } from "next-intl";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animateNumber = (element: HTMLElement, endValue: string) => {
  const numericValue = parseFloat(endValue.replace(/[^\d.,]/g, '').replace(',', '.'));
  gsap.fromTo(element, 
    { innerHTML: 0 }, 
    { innerHTML: numericValue, duration: 2, ease: 'power1.inOut', 
      snap: { innerHTML: 1 }, 
      onUpdate: function() {
        element.innerHTML = Math.round(parseFloat(element.innerHTML)).toLocaleString();
      }
    }
  );
};

export const InNumbers: React.FC = () => {
  const t = useTranslations();
  const numbersRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const elements = numbersRefs.current;

    elements.forEach((element, index) => {
      if (element && element.dataset.endValue) {
        ScrollTrigger.create({
          trigger: element,
          start: "top 80%",
          onEnter: () => animateNumber(element, element.dataset.endValue || ''),
          once: true
        });
      }
    });
  }, []);

  return (
    <div className={styles.numbers}>
      <p className={styles.numbers__title}>Mainstream</p>
      <p className={styles.numbers__numb}> {t("statistic.innumbers")}</p>

      <div className={styles.numbers__cards}>
        <div className={styles.numbers__cardone}>
          <p 
            className={styles.numbers__number} 
            data-end-value="4+"
            ref={(el) => numbersRefs.current[0] = el}
          >4+</p>
          <p className={styles.numbers__desc}>{t("statistic.market")}</p>
        </div>
        <div className={styles.numbers__cardone}>
          <p 
            className={styles.numbers__numbersecond}
            data-end-value="4"
            ref={(el) => numbersRefs.current[1] = el}
          >4</p>
          <p className={styles.numbers__descsecond}>{t("statistic.filial")}</p>
        </div>
        <div className={styles.numbers__cardone}>
          <p 
            className={styles.numbers__number}
            data-end-value="150+"
            ref={(el) => numbersRefs.current[2] = el}
          >150+</p>
          <p className={styles.numbers__desc}>{t("statistic.projects")}</p>
        </div>
        <div className={styles.numbers__cardone}>
          <p 
            className={styles.numbers__number}
            data-end-value="15K"
            ref={(el) => numbersRefs.current[3] = el}
          >15K</p>
          <p className={styles.numbers__desc}>{t("statistic.advertising")}</p>
        </div>
        <div className={styles.numbers__cardone}>
          <p 
            className={styles.numbers__number}
            data-end-value="25+"
            ref={(el) => numbersRefs.current[4] = el}
          >25+</p>
          <p className={styles.numbers__desc}>{t("statistic.employees")}</p>
        </div>
        <div className={styles.numbers__cardsecond}>
          <p 
            className={styles.numbers__numbertwo}
            data-end-value="200K"
            ref={(el) => numbersRefs.current[5] = el}
          >200K</p>
          <p className={styles.numbers__desctwo}>{t("statistic.lead")}</p>
        </div>
        <div className={styles.numbers__cardthird}>
          <p 
            className={styles.numbers__numbertwo}
            data-end-value="1126"
            ref={(el) => numbersRefs.current[6] = el}
          >1,126 <span className={styles.numbers__span}>МЛРД</span></p>
          <p className={styles.numbers__desctwo}>ПРОСМОТРОВ НА НАШИХ <br /> ВИДЕОРОЛИКАХ</p>
        </div>
        <div className={styles.numbers__cardfourt}>
          <p 
            className={styles.numbers__numbertwo}
            data-end-value="349"
            ref={(el) => numbersRefs.current[7] = el}
          >3,49 <span className={styles.numbers__span}>МЛН</span></p>
          <p className={styles.numbers__desctwo}>{t("statistic.followers")}</p>
        </div>
        <div className={styles.numbers__cardfive}>
          <p 
            className={styles.numbers__numberlast}
            data-end-value="0.01"
            ref={(el) => numbersRefs.current[8] = el}
          >0,01 $</p>
          <p className={styles.numbers__desclast}>{t("statistic.cost")}</p>
        </div>
      </div>
    </div>
  )
}
