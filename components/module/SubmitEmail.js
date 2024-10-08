import {useState} from "react"
import Image from "next/image"
//Styles
import styles from "./SubmitEmail.module.css"

function SubmitEmail() {
    const [email,setEmail] = useState("")
    const clickHandler = () => {

    }
  return (
    <div className={styles.container}>
        <h3>Deliciousness to your inbox</h3>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        <div className={styles.email}>
                <input type="text" placeholder="Your email address..." value={email} onChange={e => setEmail(e.target.value)}/>
            <button type="submit" onClick={clickHandler}>Submit</button>
        </div>
        <Image src="/images/inboxBanner1.png" alt="foodbanner1" width={1000} height={900} className={styles.image1}/>
        <Image src="/images/inboxBanner2.png" alt="foodbanner2" width={800} height={500} className={styles.image2}/>
        <Image src="/images/inboxBanner3.png" alt="foodbanner3" width={800} height={500} className={styles.image3}/>
    </div>
  )
}

export default SubmitEmail