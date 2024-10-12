//Components
import AboutChef from '../module/AboutChef'
import AboutInstagram from '../module/AboutInstagram'
import Banner from '../module/Banner'
import Categories from '../module/Categories'
import DailyRescipes from '../module/DailyRescipes'
import Recipes from '../module/Recipes'
import SubmitEmail from '../module/SubmitEmail'

function HomePage() {
  return (
    <>
        <Banner/> 
        <Categories/>
        <Recipes/>
        <AboutChef/>
        <AboutInstagram/>
        <DailyRescipes/>
        <SubmitEmail/>
    </>
  )
}

export default HomePage