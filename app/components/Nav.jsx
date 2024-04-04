import React from 'react'
import styles from "../global.css"

import Logo from "../assets/Logo_nav.svg"

const Nav = () => {
    return (
        <nav>
            <div>
                <img src={Logo} alt="Helby_Logo" />
                <ul className={styles.menu__item}>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

            <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">Book a demo</a>
                <div className="cart">
                    {/* img */}
                </div>
                <div className="avatar">
                    {/* img */}
                </div>
            </div>
        </nav>
    )
}

export default Nav