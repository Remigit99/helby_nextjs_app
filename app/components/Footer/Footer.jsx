import Link from "next/link";
import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io";

import NavLogo from "../../assets/Logo_nav.svg";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerLeft}>
          <Link href="/">
            <Image
              src={NavLogo}
              alt="Helby_Logo"
              className={styles.footerLogo}
            />
          </Link>

          <div className={styles.companyContacts}>
            <div className={styles.address}>
              <h6>Address:</h6>
              <small>16 Balogun Estate, Lagos Nigeria</small>
            </div>

            <div className={styles.phone}>
              <h6>Contact:</h6>
              <p>+234894588668</p>
              <a href="mailto:aderemibiodun@gmail.com">
                aderemibiodun@gmail.com
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a href="http://facebook.com">
                <FaFacebook />
              </a>

              <a href="http://twitter.com">
                <IoLogoTwitter />
              </a>
              <a href="http://instagram.com">
                <LuInstagram />
              </a>
              <a href="http://youtube.com">
                <IoLogoYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerContainerRight}>
          <div>
            <li>About Us</li>
            <li> Book a Demo </li>
            <li> Blog </li>
            <li> Pricing </li>
            <li> Contact </li>
          </div>

          <div>
            <li>Features</li>
            <li>Sign in</li>
            <li>Sign Up</li>
            <li>Forget Password</li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
