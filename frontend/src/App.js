import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer";

import "./public/css/bootstrap.min.css";
import "./public/css/font-awesome.min.css";
import "./public/css/owl.carousel.css";
import "./public/css/owl.theme.default.min.css";
import "./public/css/templatemo-style.css";
import "antd/dist/antd.css";
// import "./App.css";

import store from "./store";

function App() {
  return ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}

export default App;
