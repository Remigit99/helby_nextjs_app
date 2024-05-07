import Image from "next/image";

import styles from "./Compliant.module.css";
import compliantImg from "../../assets/complain.png"

import { RiAccountPinCircleLine } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";

const Compliant = () => {

  return (
    <section className={styles.compliant}>
      <div className={styles.compliantContainer}>

        <div className={styles.compliantContainerLeft}>
        

          <Image src={compliantImg} alt="secure_image" />

        </div>

        <div className={styles.compliantContainerRight}>

        <h1>Compliant</h1>
          <p>
            Configure your infrasturture in your own cloud, using best
            practices, automatically and get the best insights from our internal
            database
          </p>

          <div className={styles.compliantItems}>
            <article>
              <div className={styles.compliantItemsIcon}>
                <RiAccountPinCircleLine className={styles.Icon} />
              </div>

              <h5>Create an account</h5>
              <p>Create your company account to start using all features</p>
            </article>
            <article>
              <div className={styles.compliantItemsIcon}>
                <ImStatsBars className={styles.Icon} />

                <h5>Set up company</h5>
                <p>Start speeding up all your work workflow process</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliant;
