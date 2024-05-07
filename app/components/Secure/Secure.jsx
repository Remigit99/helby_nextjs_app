import Image from "next/image";

import styles from "./Secure.module.css";
import secureImg from "../../assets/secure_img.png"

import { RiAccountPinCircleLine } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";

const Secure = () => {

    // console.log('====================================');
    // console.log(secureImg);
    // console.log('====================================');
  return (
    <section className={styles.secure}>
      <div className={styles.secureContainer}>
        <div className={styles.secureContainerLeft}>
          <h1>Secure</h1>
          <p>
            Configure your infrasturture in your own cloud, using best
            practices, automatically and get the best insights from our internal
            database
          </p>

          <div className={styles.secureItems}>
            <article>
              <div className={styles.secureItemsIcon}>
                <RiAccountPinCircleLine className={styles.Icon} />
              </div>

              <h5>Create an account</h5>
              <p>Create your company account to start using all features</p>
            </article>
            <article>
              <div className={styles.secureItemsIcon}>
                <ImStatsBars className={styles.Icon} />

                <h5>Set up company</h5>
                <p>Start speeding up all your work workflow process</p>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.secureContainerRight}>
            <Image src={secureImg} alt="secure_image" />
        </div>
      </div>
    </section>
  );
};

export default Secure;
