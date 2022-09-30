import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.min.css'
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
  </Router>
);