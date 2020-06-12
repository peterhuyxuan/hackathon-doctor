import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, loggedIn, ...rest }) =>
    loggedIn ? (
        <Component {...rest} />
    ) : (
        <Redirect from="" to="/login" noThrow />
    );

const mapStateToProps = state => {
    const { loggedIn } = state.auth;
    return {
        loggedIn
    };
};

export default connect(mapStateToProps)(PrivateRoute);
