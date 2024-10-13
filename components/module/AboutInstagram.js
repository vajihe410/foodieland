import Link from "next/link"
//Components
import InstagramPost from "./InstagramPost"
//Styles
import styles from "./AboutInstagram.module.css"
//Icons 
import Instagram from "../icons/Instagram"
//Data
import instagramPosts from "../../data/instagramPostData"

function AboutInstagram() {

  return (
    <div className={styles.container}>
        <h2>Check out @foodieland on Instagram</h2>
        <p  className={styles.checkInstagram}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
        <div className={styles.posts}>
            {instagramPosts.map(post => <InstagramPost key={post.id} data={post}/>)}
        </div>
        <Link href="#" className={styles.instagram_link}>
          <span>visit Our Instagram</span>
          <Instagram/>
        </Link>
    </div>
  )
}

export default AboutInstagram