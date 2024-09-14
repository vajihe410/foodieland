import Link from 'next/link'
//Components
import Category from './Category'
//Styles
import styles from "./Categories.module.css"

function Categories() {
    const catefories = [
        {id:1 , src:"./images/Breakfast.png" , alt:"Breakfast"},
        {id:2 , src:"./images/Vegan.png" , alt:"Vegan"},
        {id:3 , src:"./images/Meat.png" , alt:"Meat"},
        {id:4 , src:"./images/Dessert.png" , alt:"Dessert"},
        {id:5 , src:"./images/Lunch.png" , alt:"Lunch"},
        {id:6 , src:"./images/Chocolate.png" , alt:"Chocolate"},
    ]
  return (
    <div className={styles.container}>
        <div className={styles.descriptions}>
            <h3>Categories</h3>
            <Link href="/categories">View All Categories</Link>
        </div>
        {catefories.map(category => <Category key={category.id} data={category}/>)}
    </div>
  )
}

export default Categories