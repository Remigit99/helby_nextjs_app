

import styles from "./Features.module.css"

const Features = () => {
  return (
    <section>
        <div className={featureContainer}>

            <div className="featuresHeader">
                <h1>Our Unique Features</h1>
                <p>Powerful natural language processing capabilities, that can understand 
                    and respond to customers inquires in real-time & improve customer satisfaction
                </p>
            </div>

            <div className={styles.featuresMain}></div>

        </div>
    </section>
  )
}

export default Features