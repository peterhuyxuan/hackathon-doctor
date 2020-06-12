/* eslint-disable import/no-cycle */
import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT,
} from "./constants";

import * as api from "./api";

export const login = (email, password) => {
    const request = () => ({ type: AUTH_LOGIN_REQUEST });
    const success = (payload) => ({ type: AUTH_LOGIN_SUCCESS, payload });
    const failure = (payload) => ({ type: AUTH_LOGIN_FAILURE, payload });

    return (dispatch) => {
        dispatch(request());

        return api.login(email, password).then(
            (response) => {
                const { data } = response;
                if (data) {
                    const { token } = data;
                    console.log(token)
                    if (token) {
                        // store user details and jwt token in local storage
                        // to keep user logged in between page refreshes
                        localStorage.setItem(
                            "auth_token",
                            JSON.stringify(token)
                        );
                    }
                    dispatch(success({ auth_token: token }));
                }
            },
            (error) => {
                dispatch(failure({ error }));
                throw error;
            }
        );
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: AUTH_LOGOUT });
        localStorage.removeItem("auth_token");
    };
};
