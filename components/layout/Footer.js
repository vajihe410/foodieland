import Link from "next/link"
//Icons
import Facebook from "../icons/Facebook"
import Twitter from "../icons/Twitter"
import Instagram from "../icons/Instagram"
//styles
import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.top}>
            <div>
                <h3>Foodieland</h3>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>
            <div>
                <ul>
                  <li><Link href="/recipes">Recipes</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/about-us">About us</Link></li>
                </ul>
            </div>
            </div>
            <div className={styles.footerline}></div>
            <div className={styles.down}>
              <p> &copy;2020 Flowbase. Powered by <span>Webflow</span></p>
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
    </footer>
  )
}

export default Footer