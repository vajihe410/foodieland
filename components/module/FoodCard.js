import Image from "next/image"
//Styles
import styles from "./FoodCard.module.css"
//Icons 
import Clock from "../icons/Clock"
import ForkKnife from "../icons/ForkKnife"
import Heart from "../icons/Heart"

function FoodCard({data}) {
  return (
    <div className={styles.card}>
      <Image src={data.image} alt={data.name} width={1000} height={1000}/>
      <div className={styles.name}>{data.name}</div>
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
      <div className={styles.favorite}>
        <Heart className={data.like ? styles.like : styles.dislike}/>
      </div>
    </div> 
  )
}

export default FoodCard