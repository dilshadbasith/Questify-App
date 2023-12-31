import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import { Provider } from "react-redux";
import store from './app/store.jsx'
//import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en);
//TimeAgo.addLocale(en)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
