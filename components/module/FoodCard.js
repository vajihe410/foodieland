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
      <p>{data.name}</p>
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
      <div className="favorite">
        <Heart className={data.like ? styles.like : styles.dislike}/>
      </div>
    </div> 
  )
}

export default FoodCard