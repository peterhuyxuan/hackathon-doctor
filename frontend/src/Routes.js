import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Doctor from "./components/Doctor";

import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/Doctor" component={Doctor} />
        </Switch>
      </Router>
    );
  }
}
