import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit"
import { Toaster } from "react-hot-toast";
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: rootReducer,
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
