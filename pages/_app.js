
import { useState } from 'react'
import Layout from '../components/layout/Layout'
import '../styles/index.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../Redux/store';

function MyApp({ Component, pageProps }) {
  const [theme , setTheme] = useState("theme-day")
  return (
      <Provider store={store}>
          <Layout theme={theme} setTheme={setTheme}>
              <Component {...pageProps} theme={theme} />
           </Layout>
      </Provider>

  )
}

export default MyApp
