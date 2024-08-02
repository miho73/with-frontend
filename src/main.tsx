import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.tsx'
import {Provider} from "react-redux";
import store from "./modules/redux/RootReducer.ts";
import initAxios from "./config/axios.config.ts";

initAxios();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
