import "../style/index.css";


import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}