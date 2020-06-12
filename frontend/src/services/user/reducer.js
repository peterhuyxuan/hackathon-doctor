import {
    USERS_FETCH_ME_REQUEST,
    USERS_FETCH_ME_SUCCESS,
    USERS_FETCH_ME_FAILURE,
    USERS_REGISTER_REQUEST,
    USERS_REGISTER_SUCCESS,
    USERS_REGISTER_FAILURE,
} from "./constants";

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case USERS_FETCH_ME_REQUEST:
            return {
                ...state,
                fetching: true,
                fetched: false,
                fetchError: null,
            };
        case USERS_FETCH_ME_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                fetchError: null,
                me: payload.me,
            };
        case USERS_FETCH_ME_FAILURE:
            return {
                ...state,
                fetching: false,
                fetched: false,
                fetchError: payload.error,
            };
        case USERS_REGISTER_REQUEST:
            return {
                ...state,
                registering: true,
                registered: false,
                registerError: null,
            };
        case USERS_REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                registered: true,
                registerError: null,
                user: payload.user,
            };
        case USERS_REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                registered: false,
                registerError: payload.error,
            };
        default:
            return state;
    }
};
