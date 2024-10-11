import Link from "next/link"
//Icons
import Facebook from "../icons/Facebook"
import Twitter from "../icons/Twitter"
import Instagram from "../icons/Instagram"
//Styles
import styles from "./Header.module.css"

function Header() {
  return (
    <header>
        <div className={styles.header}>
            <h2 className={styles.logo}>Foodieland</h2>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/recipes">Recipes</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/about-us">About us</Link></li>
                </ul>
            </nav>
            <div className={styles.socialmedia}>
                <Link href="#">
                    <Facebook/>
                </Link>
                <Link href="#">
                    <Twitter/>
                </Link>
                <Link href="#">
                    <Instagram/>
                </Link>
            </div>
        </div>
    <div className={styles.headerline}></div>
</header>
  )
}

export default Header