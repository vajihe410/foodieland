import Image from "next/image"
//Styles
import styles from "./FoodCard.module.css"
//Icons 
import Clock from "../icons/Clock"
import ForkKnife from "../icons/ForkKnife"
import Heart from "../icons/Heart"

function FoodCard({data}) {
  console.log(data)
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
      <button className={styles.favorite}>
        <Heart className={styles.like}/>
      </button>
    </div> 
  )
}

export default FoodCard