import Image from "next/image"
//Icons
import Heart from "../icons/Heart"
import Clock from "../icons/Clock"
import ForkKnife from "../icons/ForkKnife"
//Styles
import styles from "./DailyFoodCard.module.css"

function DailyFoodCard({data}) {

   const {image, name, time, type, like} = data

  return (
    <div className={styles.card}>
        <div>
            <Image src={image} alt={name} width={1000} height={1000}/>
            <div className={styles.favorite}>
                <div className={like ? styles.like : styles.dislike}>
                    <Heart/>
                </div>
            </div>
            <p className={styles.name}>{name}</p>
            <div className={styles.options}>
                <div>
                    <Clock/> 
                    <span>{time}</span>
                </div>
                <div>
                    <ForkKnife/> 
                    <span>{type}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DailyFoodCard