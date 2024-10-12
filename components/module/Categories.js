import Link from 'next/link'
//Components
import Category from './Category'
//Data
import categories from '../../data/category'
//Styles
import styles from "./Categories.module.css"

function Categories() {
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