//styles
import '../styles/globals.css'
/* //Fonts
import { inter } from '../utils/fontInter' */
//components
import Layout from '../components/layout/Layout'
//Fonts from Google
/* import { Inter } from 'next/font/google'

const inter = Inter({ 
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
 })
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout /* className={inter.className} */>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
