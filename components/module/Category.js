import Image from "next/image"
//Styles
import styles from "./Category.module.css"

function Category({data}) {
  const {src, alt, name} = data

  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} width={200} height={500}/>
      <h3>{name}</h3>
    </div>
  )
}

export default Category