import styles from "../About/About.module.css";
import styleSection from "../../../styles/Section.module.css";

import aboutArrow from "../../../images/about-arrow.svg";

export const About = () => {
  return (
    <section className={styleSection.about__section}>
      <div className={styles.about__container}>
        <>
          <h2 className={styles.about__title}>
            building faster, smarter,together.
          </h2>
        </>
        <>
          <p className={styles.about__text}>
            ARIES is a part of PIXIRHY, a global venture capital firm providing
            multi stage investment to develop and scale our founders’ big ideas.
            SOSV invests in every HAX program startup with follow-on through
            pre-iPO.
          </p>
        </>
        <>
          <a href="#" className={styles.about__link}>
            View program
            <span>
              <img src={aboutArrow} alt="arrow" className={styles.about_svg} />
            </span>
          </a>
        </>
      </div>
    </section>
  );
};
