//Components
import FoodCard from "./FoodCard"
//Styles
import styles from "./Recipes.module.css"

function Recipes() {
  const cardFoods = [
    {id:"1", name: "Big and juicy Wagyu Beef Cheeseburger", time: "30 Minutes", type: "Snack" , like: true , image:"/images/food1.png"},
    {id:"2", name: "Fresh Lime Roasted Salmon with Ginger Sauce", time: "30 Minutes", type: "Fish" , like: false , image:"/images/food2.png"},
    {id:"3", name: "Strawberry Oatmeal Pancake with Honey Syrup", time: "30 Minutes", type: "Breakfast" , like: false , image:"/images/food3.png"},
    {id:"4", name: "Fresh and Healthy Mixed Mayonnaise Saled", time: "30 Minutes", type: "Healthy" , like: true , image:"/images/food4.png"},
    {id:"5", name: "Chicken Meatballs with Cream Cheese", time: "30 Minutes", type: "Meat" , like: false , image:"/images/food5.png"},
    {id:"6", name: "Fruity Pancake with Orange & Blueberry", time: "30 Minutes", type: "Sweet" , like: true , image:"/images/food6.png"},
    {id:"7", name: "The Best Easy One Pot Chicken and Rice", time: "30 Minutes", type: "Snack" , like: false , image:"/images/food7.png"},
    {id:"8", name: "the Creamiest Creamy Chicken and Bacon Pasta", time: "30 Minutes", type: "Noodles" , like: false , image:"/images/food8.png"},
  ]
  return (
    <div className={styles.container}>
        <h3>Simple and tasty recipes</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
        <div className={styles.cards}>
          {
          cardFoods.map(item => <FoodCard key={item.id} data={item}/>)
          }
        </div>
    </div>
  )
}

export default Recipes