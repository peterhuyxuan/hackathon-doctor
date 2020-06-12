import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT,
} from "./constants";

let auth_token = null;
try {
    auth_token = JSON.parse(localStorage.getItem("auth_token"));
} catch (error) {
    localStorage.removeItem("auth_token");
}
const initialState = auth_token ? { loggedIn: true, auth_token } : {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                loggedIn: false,
                loginError: null,
                auth_token: null,
            };
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                loginError: null,
                auth_token: payload.auth_token,
            };
        case AUTH_LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                loginError: payload.error,
                auth_token: null,
            };
        case AUTH_LOGOUT:
            return {};
        default:
            return state;
    }
};
