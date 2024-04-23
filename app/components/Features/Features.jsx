
import Link from "next/link"
import Image from "next/image"


import styles from "./Features.module.css"

import {featuresData} from "../Features/featuresData"

const Features = () => {

    // console.log(featuresData)
  return (
    <section className={styles.features}>
        <div className={styles.featureContainer}>

            <div className={styles.featuresHeader}>
                <h1>Our Unique Features</h1>
                <p>Powerful natural language processing capabilities, that can understand 
                    and respond to customers inquires in real-time & improve customer satisfaction
                </p>
            </div>

            <div className={styles.featuresMain}>

                {
                    featuresData.map(({id,title, desc, img}) =>  <article key={id}>
                                    <h4>{title}</h4>
                                    <p>{desc}</p>

                                    <Link href = "/">Learm More</Link>
                                    <Image src={img} alt="decoration" />
                                    </article>
 )

                }
                
            </div>

        </div>
    </section>
  )
}

export default Features