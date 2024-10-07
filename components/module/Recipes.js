//Components
import FoodCard from "./FoodCard"
import FoodAd from "./FoodAd"
//Styles
import styles from "./Recipes.module.css"
//Data 
import foodData from "../../data/foodData"

function Recipes() {
  const cardFoods = foodData.slice(0,8)
  return (
    <div className={styles.container}>
        <h3>Simple and tasty recipes</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
        <div className={styles.cards}>
          {
          cardFoods.map((item)=> <FoodCard key={item.id} data={item} />)
          }
        </div>
        <FoodAd/>
    </div>
  )
}

export default Recipes