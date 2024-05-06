import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css"


import heroAvatar from "../../assets/user_profile.png"
import headerIllustration from "../../assets/hero_illustration.png"


import React from 'react'

const Header = () => {
    
    return (
        <section>
            <div className={`container ${styles.headerContainer}`}>

                <div className={styles.headerContainerTop}>

                    <div className={styles.headerLeft}>

                        <div className={styles.headerTitle}>
                            <h1>Simplify your</h1>
                            <h1>customer acqusition process</h1>
                        </div>

                        <p className={styles.para}>
                            Powerful natural language processing capabilities, that can understand and
                            respond to customer inquries in real-time & improve customer satisfaction.
                        </p>
                    </div>

                    <div className={styles.headerRight}>

                        <div className={styles.headerContainerRight}>
                            <div>
                                <Image src={headerIllustration} alt="" />
                            </div>
                        </div>

                    </div>

                </div>


                <div className={styles.headerContainerBottom}>

                    <div className={styles.demoBtns}>
                        <Link href="/" className={styles.demoBtnA}>Get started free</Link>
                        <Link href="/" className={styles.demoBtnB}>Book a demo</Link>
                    </div>

                    <div className={styles.heroSpecialist}>
                        <div className={styles.heroSpecLeft}>
                            <Image src={heroAvatar} alt="hero Avatar" className={styles.heroAvatar} />

                        </div>

                        <div className={styles.heroSpecRight}>
                            <small>15 min delivery call</small>
                            <p>Talk with a <span>Specialist</span></p>
                        </div>
                    </div>

                </div>

            </div>






        </section>
    )
}

export default Header