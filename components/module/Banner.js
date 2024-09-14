import Image from 'next/image'
import Link from 'next/link'
//Styles
import styles from "./Banner.module.css"
//Icons
import Clock from '../icons/Clock'
import ForkKnife from '../icons/ForkKnife'
import Play from '../icons/Play'

function Banner() {
  return (
    <div className={styles.container}>
        <div className={styles.aboutBanner}>
            <div className={styles.hotRecipes}>
                <Image className={styles.letter} src="/images/letter.png" width={500} height={200} alt='letter image'/>
                <h5>Hot Recipes</h5>
            </div>
            <div className={styles.texts}>
                <h1>Spicy delicious chicken wings</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className={styles.options}>
              <div>
                  <Clock/>
                  <span>30 Minutes</span>
              </div>
              <div>
                  <ForkKnife/>
                  <span>Chiken</span>
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.chef}>
                <Image src="/images/men.png" width={500} height={200} alt='men image'/>
                <div className={styles.aboutChef}>
                  <p>John Smith</p>
                  <p>15 March 2022</p>
                </div>
              </div>
              <Link href="#" className={styles.play}>
                <p>View Recipes</p>
                <Play/>
              </Link>
            </div>
        </div>
        <Image className={styles.bannerImage} src="/images/banner.png" width={1000} height={700} alt='food image'/>
        <div className={styles.circle}>
          <div className={styles.border}>
            <div className={styles.like}>
              <Image src="/images/like.png" width={1000} height={700} alt='like image' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner