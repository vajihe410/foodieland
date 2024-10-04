import Image from "next/image"
//Styles
import styles from "./InstagramPost.module.css" 
//Icons
import More from "../icons/More"
import Check from "../icons/Check"
import Like from "../icons/Like"
import Comment from "../icons/Comment"
import Share from "../icons/Share"
import Save from "../icons/Save"

function InstagramPost({data}) {
  console.log(data)
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
          <div className={styles.profile} >
            <Image className={styles.profile_image} src="/images/profile.png" alt="profile" width={800} height={800}/>
            <div className={styles.profile_texts}>
              <div><span className={styles.profile_name}>Foodieland.</span> <Check/></div>
              <span className={styles.profile_location}>{data.location}</span>
            </div>
          </div>
          <More className={styles.more}/>
      </div>
      <div className={styles.card_body}>
        <Image className={styles.post} src={data.src} alt={data.name} width={1000} height={1000}/>
        <span>1/3</span>
      </div>
      <div className={styles.card_footer}>
        <div className={styles.interaction}>
          <div>
            <Like/>
            <Comment/>
            <Share/>
          </div>
          <div className={styles.pages}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Save/>
        </div>
        <div className={styles.captions}>
          <div className={styles.text}>
            <Image className={styles.follower} src="/images/follower.png" alt="follower" width={800} height={800}/>
            <p className={styles.like}>Liked by <span>craig_love</span> and <span>{data.likes}</span> others</p>
          </div>
          <p className={styles.caption}><span>Foodieland.</span>{data.caption}</p>
          <span className={styles.date}>{data.publish}</span>
        </div>
      </div>
      
    </div>
  )
}

export default InstagramPost