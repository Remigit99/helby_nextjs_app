
import style from "./page.module.css"

import Header from "./components/Header/Header"
import Patners from "./components/Partners/Patners"
import Features from "./components/Features/Features"
import Secure from  "./components/Secure/Secure"
import Compliant from "./components/Compliant/Compliant"


export default function Home() {
  return (
    <main className={`container ${style.mainContainer}`}>
      <Header/>
      <Patners/>
      <Features/>
      <Secure/>
      <Compliant/>
    </ main >
  );
}
