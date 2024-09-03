//styles
import '../styles/globals.css'
/* import '../styles/fonts.css' */
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
