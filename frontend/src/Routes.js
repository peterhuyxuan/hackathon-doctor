import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./containers/PrivateRoute";
import PublicRoute from "./containers/PublicRoute";
import Header from "./components/Header";
import Patient from "./components/Patient";
import PatientStatus from "./components/PatientStatus";
import Doctor from "./components/Doctor";
import LoginPage from "./components/LoginPage";

import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/Patient" component={Patient} />
          <Route path="/PatientStatus" component={PatientStatus} />
          <Route path="/Doctor" component={Doctor} />
          <PublicRoute path="/login" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={Doctor} />
        </Switch>
      </Router>
    );
  }
}
