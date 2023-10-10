import styles from "../Home/Home.module.css";
import styleSection from "../../styles/Section.module.css";

import scrollArrow from "../../images/scroll_arrow.svg";

export const Home = () => {
  return (
    <section className={styleSection.main__section}>
      <div className={styles.main_small} />
      <h1 className={styles.main__title}>
        We Are Here For Your{" "}
        <span className={styles.main__span}>Artificial Intelligence</span>{" "}
        Startup.
      </h1>
      <img src={scrollArrow} alt="scrollArrow" className={styles.main_svg} />
    </section>
  );
};
