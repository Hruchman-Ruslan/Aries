import { NavLink } from "react-router-dom";
import styles from "../Header/Header.module.css";
import sectionStyles from "../../styles/Section.module.css";

export const Header = () => {
  return (
    <header className={sectionStyles.section}>
      <nav className={styles.header__list}>
        <>
          <ul className={styles.header__item}>
            <li>
              <NavLink className={styles.header__text} to="/program">
                program
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.header__text} to="/funding">
                funding
              </NavLink>
            </li>
          </ul>
        </>
        <NavLink className={styles.header__text} to="/">
          aries
        </NavLink>
        <>
          <ul className={styles.header__item}>
            <li>
              <NavLink className={styles.header__text} cl to="/jobs">
                jobs
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.header__text} to="/menu">
                menu
              </NavLink>
            </li>
          </ul>
        </>
      </nav>
    </header>
  );
};
