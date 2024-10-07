//Styles
import styles from "./DailyRescipes.module.css"
//Data
import foodData from "../../data/foodData"
//Components
import DailyFoodCard from "./DailyFoodCard"

function DailyRescipes() {
    const cardFoods = foodData.slice(8)
  return (
    <div className={styles.container}>
        <div className={styles.texts}>
            <h3>Try this delicious recipe to make your day</h3>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div className={styles.cards}>
            {cardFoods.map(item => <DailyFoodCard key={item.id} data={item}/>)}
        </div>
    </div>
  )
}

export default DailyRescipes