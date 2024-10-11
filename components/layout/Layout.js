//components
import Header from "./Header"
import Footer from "./Footer"
//styles
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
        <Header/>
        <main className={styles.container}>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout