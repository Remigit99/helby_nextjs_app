import Image from "next/image";

import { testimonialData } from "./TestimonialData";

import styles from "./Testimonial.module.css";

import trustpilot from "../../assets/trustpilot.png";
import stars from "../../assets/stars.png";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialHeader}>
          <h1>Nothing less than excellent</h1>

          <div className={styles.testimonialHeaderImg}>
            <Image src={trustpilot} alt="trustpilot_img"  />
            <Image src={stars} alt="stars_img" />
          </div>

          <p>
            Reviews 5127, <b>Excellent</b>
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className={styles.testimonialslider}>
          {testimonialData.map(
            ({
              id,
              rating,
              statement,
              customer_img,
              customer_name,
              customer_port,
            }) => (
              <article key={id} className={styles.customer}>
                <h5>{rating}</h5>
                <p>{statement}</p>

                <div className={styles.customerDetails}>
                  <div className={styles.customerImg}>
                    <Image src={customer_img} alt={customer_name} />
                  </div>
                  <div className={styles.customerInfo}>
                      <h5>{customer_name}</h5>
                      <small>{customer_port}</small>
                    </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
