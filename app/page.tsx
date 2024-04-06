import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css"

import heroAvatar from "./assets/user_profile.png"
import headerIllustration from "./assets/hero_illustration.png"



export default function Home() {
  return (
    <main className={`container ${style.mainContainer}`}>

      <header className={style.header}>
        <div className={style.headerContainer}>
          <div className={style.headerContainerLeft}>

            <div className={style.headerTitle}>
              <h1>Simplify your</h1>
              <h1>customer acqusition</h1>
              <h1>process</h1>
            </div>

            <p>
              Powerful natural language processing capabilities, that can understand and
              respond to customer inquries in real-time & improve customer satisfaction.
            </p>

            <div className={style.demoBtns}>
              <Link href="/" className={style.demoBtnA}>Get started free</Link>
              <Link href="/" className={style.demoBtnB}>Book a demo</Link>
            </div>

            <div className={style.heroSpecialist}>
              <div className={style.heroSpecLeft}>
                <Image src={heroAvatar} alt="hero Avatar" className={style.heroAvatar} />
              </div>

              <div className={style.heroSpecRight}>
                <small>15 min delivery call</small>
                <p>Talk with a <span>Specialist</span></p>
              </div>
            </div>
          </div>
          <div className={style.headerContainerRight}>
            <div>
              <Image src={headerIllustration} alt="" />
            </div>
          </div>
        </div>
      </header>
    </ main >
  );
}
