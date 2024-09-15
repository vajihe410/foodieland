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
    const backgroundColor = [
      "linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);",
      "linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%);",
      "linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%);",
      "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);",
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);",
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);"
    ]
  return (
    <div className={styles.container}>
        <div className={styles.descriptions}>
            <h3>Categories</h3>
            <Link href="/categories">View All Categories</Link>
        </div>
        <div className={styles.categories}>
          {categories.map((category,index) => <Category key={category.id} data={category}  style ={{backgroundColor:backgroundColor[index]}}/>)}   
        </div>
    </div>
  )
}

export default Categories