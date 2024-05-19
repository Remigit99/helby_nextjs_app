import Link from "next/link";
import styles from "./cta.module.css";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContainer}>
        <h1>Take your audience to the next level starting today</h1>
        <button className={styles.ctaBtn}>Let's get started</button>
      </div>
    </section>
  );
};

export default CTA;
