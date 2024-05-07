import Image from "next/image";

import trustpilot from "../../assets/trustpilot.png";
import stars from "../../assets/stars.png";

const Testimonial = () => {
  return (
    <section className={StyleSheet.testimonial}>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialHeader}>
          <h1>Nothing less than excellent</h1>

          <div className={styles.testimonialHeaderImg}>
            <Image src={trustpilot} alt="trustpilot_img" />
            <Image src={stars} alt="stars_img" />
          </div>

          <p>Reviews 5127, <b>Excellent</b></p>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonial;
