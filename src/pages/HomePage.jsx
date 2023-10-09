import { Home } from "../components/Home/Home";
import styles from "../styles/Section.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.main__section}>
        <Home />
      </section>
    </>
  );
}
