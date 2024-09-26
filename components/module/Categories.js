import Link from 'next/link'
//Components
import Category from './Category'
//Styles
import styles from "./Categories.module.css"

function Categories() {
    const categories = [
        {id:1, src:"/images/Breakfast.png", alt:"Breakfast", name:"Breakfast"},
        {id:2, src:"/images/Vegan.png", alt:"Vegan", name:"Vegan"},
        {id:3, src:"/images/Meat.png", alt:"Meat", name:"Meat", },
        {id:4, src:"/images/Dessert.png", alt:"Dessert", name:"Dessert"},
        {id:5, src:"/images/Lunch.png", alt:"Lunch", name:"Lunch"},
        {id:6, src:"/images/Chocolate.png", alt:"Chocolate", name:"Chocolot"},
    ]
  return (
    <div className={styles.container}>
        <div className={styles.descriptions}>
            <h3>Categories</h3>
            <Link href="/categories">View All Categories</Link>
        </div>
        <div className={styles.categories}>
          {categories.map((category) => <Category key={category.id} data={category} />)}   
        </div>
    </div>
  )
}

export default Categories