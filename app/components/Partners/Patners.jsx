
import Image from "next/image"

import styles from "./patners.module.css"

import proline from "../../assets/proline.png"
import devwise from "../../assets/devwise.png"
import invert from "../../assets/invert.png"
import hitech from "../../assets/hitech.png"
import flash from "../../assets/flash.png"



const Patners = () =>{
    return(
        <section className={styles.patners}>
            <div className ={`container ${styles.patnerContainer}`}>

                <Image src={proline} className={styles.patnerIcon} alt = "proline" />
                <Image src={devwise} className={styles.patnerIcon} alt = "devwise" />
                <Image src={invert} className={styles.patnerIcon} alt = "invert" />
                <Image src={hitech} className={styles.patnerIcon} alt = "hitech" />
                <Image src={flash} className={styles.patnerIcon} alt = "flash" />
            </div>         
        </section>
    )
}

export default Patners