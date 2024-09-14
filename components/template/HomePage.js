//Components
import Banner from '../module/Banner'
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
    </>
  )
}

export default HomePage