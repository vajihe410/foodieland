//Components
import Banner from '../module/Banner'
import Categories from '../module/Categories'
import Recipes from '../module/Recipes'
//Styles
import styles from "./HomePage.module.css"

function HomePage() {
  return (
    <>
        <div className={styles.banner}>
          <div></div>
          <Banner/> 
          <div></div>
        </div>
        <Categories/>
        <Recipes/>
    </>
  )
}

export default HomePage