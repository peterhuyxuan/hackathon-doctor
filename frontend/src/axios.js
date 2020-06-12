/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
import axios from "axios";

import store from "./store";
import { logout } from "./services/auth/actions";

// create an axios instance with default back-end API url
const instance = axios.create({
    baseURL: process.env.API_URL || "http://localhost:8000/api",
});

instance.defaults.headers.post["Content-Type"] = "application/json";

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        let errorMessage;

        if (!error.response) {
            // network error
            errorMessage = "Network Error.";
        } else {
            errorMessage = error.response.data || error.statusText;

            switch (error.response.status) {
                // internal server error
                case 500:
                    errorMessage = "Internal Server Error.";
                    break;
                // not logged in
                case 401:
                    if (localStorage.getItem("auth_token")) {
                        store.dispatch(logout());
                    }
                    // no need to navigate to "/login" here
                    // as the PrivateRoute component should handle that
                    break;
                default:
                    break;
            }
        }

        return Promise.reject(errorMessage);
    }
);

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

instance.interceptors.request.use(
    (config) => {
        const auth_token = JSON.parse(localStorage.getItem("auth_token"));

        if (auth_token) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Token ${auth_token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;
