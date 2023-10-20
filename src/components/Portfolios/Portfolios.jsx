import styles from "../Portfolios/Portfolios.module.css";
import styleSection from "../../styles/Section.module.css";

import atomin from "../../images/atomin.svg";
import oracle from "../../images/oracle.svg";
import jarvice from "../../images/jarvice.svg";
import raxon from "../../images/raxon.svg";
import tindo from "../../images/tindo.svg";
import kawaski from "../../images/kawaski.svg";
import cypher from "../../images/cypher.svg";
import ordix from "../../images/ordix.svg";

export const Portfolios = () => {
  return (
    <section className={styleSection.section__portfolios}>
      <div className={styles.container}>
        <h2 className={styles.title}>our Investment Portfolios</h2>
        <ul className={styles.list}>
          <li>
            <a href="#" className={styles.link}>
              <img src={atomin} alt="logo" />
              ATOMIN
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <img src={oracle} alt="logo" />
              ORACLE
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <img src={jarvice} alt="logo" />
              JARVICE
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <img src={raxon} alt="logo" />
              RAXON
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <img src={tindo} alt="logo" />
              TINDO
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <img src={kawaski} alt="logo" />
              KAWASKI
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <img src={cypher} alt="logo" />
              CYPHER
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <img src={ordix} alt="logo" />
              ORDIX
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
