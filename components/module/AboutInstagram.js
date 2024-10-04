import Link from "next/link"
//Components
import InstagramPost from "./InstagramPost"
//Styles
import styles from "./AboutInstagram.module.css"
//Icons 
import Instagram from "../icons/Instagram"

function AboutInstagram() {
    const instagramPosts = [
        {id:1, src:"/images/food9.png", alt:"food", location:"Tokyo, Japan", caption:"The vegetables dishes need to have certain vitamin for those people", likes:"44,686", publish:"September 19" },
        {id:2, src:"/images/food10.png", alt:"food", location:"Tokyo, Japan", caption:"Sweet food can bring someone into happiness as long as they don't eat to much", likes:"44,686", publish:"September 19"},
        {id:3, src:"/images/food11.png", alt:"food", location:"Tokyo, Japan", caption:"What are you doing before start cooking? prepare thr tools or ingredients?", likes:"44,686", publish:"September 19"},
        {id:4, src:"/images/food12.png", alt:"food", location:"Tokyo, Japan", caption:"Steak never be wrong, it's suitable for you who want romantic dinner", likes:"44,686", publish:"September 19"},
    ]
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