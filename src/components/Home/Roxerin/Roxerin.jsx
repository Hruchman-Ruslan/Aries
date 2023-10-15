import styles from "../Roxerin/Roxerin.module.css";
import styleSection from "../../../styles/Section.module.css";

import aboutArrow from "../../../images/second-arrow.svg";
import roxerinImage from "../../../images/roxerin-image.jpg";

export const Roxerin = () => {
  return (
    <section className={styleSection.section__kawaski}>
      <div className={styles.roxerin__wrapper}>
        <div className={styles.roxerin__box}>
          <span className={styles.roxerin__about}>ROXERIN</span>
          <h2 className={styles.roxerin__title}>
            Young Minds, Experience hand & Strong Command.
          </h2>
          <p className={styles.roxerin__text}>
            We spoke to Robotic and sound designer Ben Lukas Boysen about the
            evolution of robot soundtracks and some of his top picks.
          </p>
          <>
            <a href="#" className={styles.roxerin__link}>
              View project
              <span>
                <img
                  src={aboutArrow}
                  alt="arrow"
                  className={styles.about_svg}
                />
              </span>
            </a>
          </>
        </div>

        <div className={styles.bg}>
          <img src={roxerinImage} alt="robot" className={styles.kawaskImage} />
        </div>
      </div>
    </section>
  );
};
