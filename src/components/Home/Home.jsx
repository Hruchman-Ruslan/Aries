import styles from "../Home/Home.module.css";
import scrollArrow from "../../images/scroll_arrow.svg";

export const Home = () => {
  return (
    <>
      <h1 className={styles.main__title}>
        We Are Here For Your{" "}
        <span className={styles.main__span}>Artificial Intelligence</span>{" "}
        Startup.
      </h1>
      <img src={scrollArrow} alt="scrollArrow" className={styles.main_svg} />
    </>
  );
};
