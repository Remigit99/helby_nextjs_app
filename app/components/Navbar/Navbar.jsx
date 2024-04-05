

import Link from "next/link"
import Image from "next/image"
import NavLogo from "../../assets/Logo_nav.svg"
import Cart from "../../assets/cart_nav.svg"
import Avatar from "../../assets/user_nav.svg"
import style from "./navbar.module.css"

const navMenuLinks = [
    { id: 1, path: "/features", caption: "Features" },
    { id: 1, path: "/pricing", caption: "Pricing" },
    { id: 1, path: "/About-us", caption: "About Us" },
    { id: 1, path: "/blog", caption: "Blog" },
    { id: 1, path: "/contact", caption: "Contact" },
]

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`container ${style.navContainer}`}>
                <div className={style.navContainerLeft}>
                    <Link href="/">
                        <Image src={NavLogo} alt="Helby_Logo" />
                    </Link>
                    <ul className={style.menuItems}>
                        {
                            navMenuLinks.map(({ id, path, caption }) =>
                                <li key={id} >
                                    <Link href={path}>{caption}</Link>
                                </li>)
                        }
                    </ul>
                </div>

                <div className={style.navContainerRight}>
                    <Link href="/">Book a demo</Link>
                    <Link href="/" >
                        <Image src={Cart} alt="cartIcon" />
                    </Link>
                    <Link href="/" >
                        <Image src={Avatar} alt="avatarIcon" />
                    </Link>

                    <div className="navBtns"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;