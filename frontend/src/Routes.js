import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./containers/PrivateRoute";
import PublicRoute from "./containers/PublicRoute";
import Header from "./components/Header";
import Patient from "./components/Patient";
import BookingEvent from "./components/BookingEvent";
import Doctor from "./components/Doctor";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";

import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Header} />
          <PublicRoute path="/patient" component={Patient} />
          <PublicRoute path="/patient-status" component={BookingEvent} />
          <PublicRoute path="/login" component={LoginPage} />
          <PublicRoute path="/register" component={RegistrationPage} />
          <PrivateRoute path="/dashboard" component={Doctor} />
        </Switch>
      </Router>
    );
  }
}
