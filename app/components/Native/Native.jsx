import Image from "next/image";

import styles from "./Native.module.css";
import nativeImg from "../../assets/native_data.png"

import { RiAccountPinCircleLine } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";

const Native = () => {

  return (
    <section className={styles.native}>
      <div className={styles.nativeContainer}>
        <div className={styles.nativeContainerLeft}>
          <h1>native</h1>
          <p>
            Configure your infrasturture in your own cloud, using best
            practices, automatically and get the best insights from our internal
            database
          </p>

          <div className={styles.nativeItems}>
            <article>
              <div className={styles.nativeItemsIcon}>
                <RiAccountPinCircleLine className={styles.Icon} />
              </div>

              <h5>Create an account</h5>
              <p>Create your company account to start using all features</p>
            </article>
            <article>
              <div className={styles.nativeItemsIcon}>
                <ImStatsBars className={styles.Icon} />

                <h5>Set up company</h5>
                <p>Start speeding up all your work workflow process</p>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.nativeContainerRight}>
            <Image src={nativeImg} alt="native_image" />
        </div>
      </div>
    </section>
  );
};

export default Native;
