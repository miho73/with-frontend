import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.tsx'
import {Provider} from "react-redux";
import rootReducer from "./modules/reducers/RootReducer.ts";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
