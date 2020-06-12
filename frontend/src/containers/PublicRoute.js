import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const PublicRoute = ({ component: Component, loggedIn, ...rest }) =>
    loggedIn ? (
        <Redirect from="" to="/dashboard" noThrow />
    ) : (
        <Component {...rest} />
    );

const mapStateToProps = state => {
    const { loggedIn } = state.auth;
    return {
        loggedIn
    };
};

export default connect(mapStateToProps)(PublicRoute);
