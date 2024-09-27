import Image from 'next/image'
//Styles
import styles from './FoodAd.module.css'

function FoodAd() {
  return (
    <div className={styles.adCard}>
        <div>Dont forget to eat healthy food</div>
        <Image src="/images/food-ad.png" width={2000} height={2000} alt='food ad'/>
        <span>www.foodieland.com</span>
    </div>
  )
}

export default FoodAd