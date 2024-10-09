//styles
import '../styles/globals.css'
/* //Fonts
import { inter } from '../utils/fontInter' */
//components
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
