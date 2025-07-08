import { useState } from 'react';
import '../styles/index.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../Redux/store';

function MyApp({ Component, pageProps }) {
  const [theme , setTheme] = useState("theme-day");

  return (
      <Provider store={store}>
              <Component {...pageProps} theme={theme} />
      </Provider>

  )
}

export default MyApp
