import Image from "next/image"
//Styles
import styles from "./FoodCard.module.css"
//Icons 
import Clock from "../icons/Clock"
import ForkKnife from "../icons/ForkKnife"
import Heart from "../icons/Heart"

function FoodCard({data}) {

  const { name, image, time, type, like } = data

  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={1000} height={1000}/>
      <div className={styles.name}>{name}</div>
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
      <div className={styles.favorite }>
        <div className={like ? styles.like : styles.dislike}>
          <Heart/>
        </div>
      </div>
    </div> 
  )
}

export default FoodCard