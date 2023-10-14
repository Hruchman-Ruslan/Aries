import styles from "../Invest/Invest.module.css";

import styleSection from "../../../styles/Section.module.css";

import aboutArrow from "../../../images/about-arrow.svg";
import investImage from "../../../images/invest-image.jpg";

export const Invest = () => {
  return (
    <section className={styleSection.invest}>
      <div className={styles.title__wrapper}>
        <h2 className={styles.title}>
          We invest $27 Billion per year into AI startups.
        </h2>
        <p className={styles.text}>
          They are showing researches and writting regularly about the
          consequnces happening on AI. Our unique program is designed for
          startups, combining hands-on help from a deeply experienced product
          development team and a total investment package of $270,000.
        </p>
      </div>

      <div className={styles.kawaski__wrapper}>
        <div className={styles.bg}>
          <img src={investImage} alt="robot" className={styles.kawaskImage} />
        </div>

        <div className={styles.content}>
          <span className={styles.decor}>KAWASKI</span>
          <h3 className={styles.subTitle}>
            Corporobo Design Interview with Ben Lukas.
          </h3>
          <p className={styles.about}>
            We spoke to Robotic and sound designer Ben Lukas Boysen about the
            evolution of robot soundtracks and some of his top picks.
          </p>

          <>
            <a href="#" className={styles.invest__link}>
              View program
              <span>
                <img
                  src={aboutArrow}
                  alt="arrow"
                  className={styles.invest__svg}
                />
              </span>
            </a>
          </>
        </div>
      </div>
    </section>
  );
};
