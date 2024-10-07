import Image from "next/image"
//Icons
import Heart from "../icons/Heart"
import Clock from "../icons/Clock"
import ForkKnife from "../icons/ForkKnife"
//Styles
import styles from "./DailyFoodCard.module.css"

function DailyFoodCard({data}) {
    console.log(data)
  return (
    <div className={styles.card}>
        <div>
            <Image src={data.image} alt={data.name} width={1000} height={1000}/>
            <div className={styles.favorite}>
                <Heart className={data.like ? styles.like : styles.dislike}/>
            </div>
            <p className={styles.name}>{data.name}</p>
            <div className={styles.options}>
                <div>
                    <Clock/> 
                    <span>{data.time}</span>
                </div>
                <div>
                    <ForkKnife/> 
                    <span>{data.type}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DailyFoodCard