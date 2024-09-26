import Image from 'next/image'

function FoodAd() {
  return (
    <div>
        <p>Dont forget to eat healthy food</p>
        <Image src="/images/food-ad.js" width={100} height={100} alt='food ad'/>
        <p>www.foodieland.com</p>
    </div>
  )
}

export default FoodAd