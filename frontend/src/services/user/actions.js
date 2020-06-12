import {
    USERS_FETCH_ME_REQUEST,
    USERS_FETCH_ME_SUCCESS,
    USERS_FETCH_ME_FAILURE,
    USERS_REGISTER_REQUEST,
    USERS_REGISTER_SUCCESS,
    USERS_REGISTER_FAILURE,
} from "./constants";

import * as api from "./api";

export const fetchMe = () => {
    const request = () => ({ type: USERS_FETCH_ME_REQUEST });
    const success = (payload) => ({ type: USERS_FETCH_ME_SUCCESS, payload });
    const failure = (payload) => ({ type: USERS_FETCH_ME_FAILURE, payload });

    return (dispatch) => {
        dispatch(request());

        return api.fetchMe().then(
            (response) => {
                const me = response.data;
                dispatch(success({ me }));
                return me;
            },
            (error) => {
                dispatch(failure({ error }));
                throw error;
            }
        );
    };
};

export const register = ({
    name,
    email,
    password,
    registration_number,
    profession,
    registration_expiry_date,
}) => {
    const request = () => ({ type: USERS_REGISTER_REQUEST });
    const success = (payload) => ({ type: USERS_REGISTER_SUCCESS, payload });
    const failure = (payload) => ({ type: USERS_REGISTER_FAILURE, payload });

    return (dispatch) => {
        dispatch(request());

        return api
            .register({
                name,
                email,
                password,
                registration_number,
                profession,
                registration_expiry_date,
            })
            .then(
                (response) => {
                    const user = response.data;
                    dispatch(success({ user }));
                    return user;
                },
                (error) => {
                    dispatch(failure({ error }));
                    throw error;
                }
            );
    };
};
