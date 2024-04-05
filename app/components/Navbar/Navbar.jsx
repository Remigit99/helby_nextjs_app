"use client"

import Link from "next/link"
import Image from "next/image"
import pathname from "next/navigation"
import NavLogo from "../../assets/Logo_nav.svg"
import Cart from "../../assets/cart_nav.svg"
import Avatar from "../../assets/user_nav.svg"
import style from "./navbar.module.css"

import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import { useState, useEffect } from "react"

const navMenuLinks = [
    { id: 1, path: "/features", caption: "Features" },
    { id: 2, path: "/pricing", caption: "Pricing" },
    { id: 3, path: "/About-us", caption: "About Us" },
    { id: 4, path: "/blog", caption: "Blog" },
    { id: 5, path: "/contact", caption: "Contact" },
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className={style.nav}>
            <div className={`container ${style.navContainer}`}>
                <div className={style.navContainerLeft}>
                    <Link href="/">
                        <Image src={NavLogo} alt="Helby_Logo" />
                    </Link>

                    {navbarOpen && <ul className={style.menuItems}>
                        {
                            navMenuLinks.map(({ id, path, caption }) =>
                                <li key={id} >
                                    <Link href={path}>{caption}</Link>
                                </li>)
                        }
                    </ul>
                    }
                </div>

                <div className={style.navContainerRight}>
                    <Link href="/" className={style.demo}>Book a demo</Link>
                    <Link href="/" >
                        <Image src={Cart} alt="cartIcon" className={style.navIcon} />
                    </Link>
                    <Link href="/" >
                        <Image src={Avatar} alt="avatarIcon" className={style.navIcon} />
                    </Link>

                    <div className={style.navBtns}>
                        {
                            navbarOpen ? <IoMdClose className={style.Icon} onClick={() => setNavbarOpen(!navbarOpen)} /> :
                                <RiMenu4Line className={style.Icon} onClick={() => setNavbarOpen(!navbarOpen)} />
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;