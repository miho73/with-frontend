import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.tsx'
import {Provider} from "react-redux";
import store from "./modules/redux/RootReducer.ts";
import initAxios from "./config/axios.config.ts";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

initAxios();

const reCAPTCHAKey = import.meta.env.VITE_RECAPTCHA_SITEKEY;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey={reCAPTCHAKey}
      useEnterprise={true}
      container={{
        parameters: {
          badge: 'inline',
          theme: 'dark',
        }
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
)
