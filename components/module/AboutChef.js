import Image from 'next/image'
import Link from 'next/link'
//Styles
import styles from './AboutChef.module.css'

function AboutChef() {

  return (
    <div className={styles.container}>
        <div className={styles.texts}>
            <h2>Everyone can be a chefnig their own kitchen</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
            <Link href="/chef">Learn More</Link>
        </div>
        <div className={styles.images}>
            <Image className={styles.chef} src="/images/chef.png" alt='chef' width={2000} height={2000}/>
            <Image className={styles.tomato} src="/images/Tomato.png" alt='Tomato' width={1000} height={1000}/>
            <Image className={styles.meat} src="/images/Meat.png" alt='Meat' width={1000} height={1000}/>
            <Image className={styles.onion} src="/images/Onion.png" alt='Onion' width={1000} height={1000}/>
            <Image className={styles.vegan} src="/images/Vegan.png" alt='Vegan' width={1000} height={1000}/>
        </div>
    </div>
  )
}

export default AboutChef