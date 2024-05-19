import { resourcesData } from "./MyResources";
import styles from "./myresources.module.css";

import Image from "next/image";


const MyResources = () => {
  return (
    <section>
      <div className={styles.resourcesContainer}>
        {resourcesData.map(
          ({
            id,
            thumbnail,
            category,
            title,
            shortDesc,
            authorName,
            authorAvatar,
            dataCreated,
          }) => 
            <article className={styles.article} key={id}>
              <div className={styles.resImg}>
                <Image src={thumbnail} alt={title}/>
              </div>
              <div className={styles.resMain}>
                <h5>{category}</h5>
                <h3>{title}</h3>
                <p>{shortDesc}</p>
              </div>

              <div className={styles.authorDetails}>
                <div className={styles.authorImg}>
                  <Image src={authorAvatar} alt={authorName} />
                </div>

                <div className={styles.authorInfo}>
                  <h5>{authorName}</h5>
                  <p>{dataCreated}</p>
                </div>

              </div>
            </article>
          
        )}
      </div>
    </section>
  );
};

export default MyResources;
