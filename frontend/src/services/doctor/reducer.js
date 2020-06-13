import {
    DOCTOR_GET_SYMPTOM_REQUEST,
    DOCTOR_GET_SYMPTOM_SUCCESS,
    DOCTOR_GET_SYMPTOM_FAILURE,
    DOCTOR_CREATE_BOOKING_REQUEST,
    DOCTOR_CREATE_BOOKING_SUCCESS,
    DOCTOR_CREATE_BOOKING_FAILURE,
} from "./constants";

const initialState = {
    symptoms: [],
    bookingevent: {
        bookingevent_set: []
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case DOCTOR_GET_SYMPTOM_REQUEST:
            return {
                ...state,
                fetching: true,
                fetched: false,
                fetchError: null,
            };
        case DOCTOR_GET_SYMPTOM_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                fetchError: null,
                symptoms: payload.symptoms,
            };
        case DOCTOR_GET_SYMPTOM_FAILURE:
            return {
                ...state,
                fetching: false,
                fetched: false,
                fetchError: payload.error,
            };
        case DOCTOR_CREATE_BOOKING_REQUEST:
            return {
                ...state,
                fetching: true,
                fetched: false,
                fetchError: null,
            };
        case DOCTOR_CREATE_BOOKING_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                fetchError: null,
                bookingevent: payload.bookingevent,
            };
        case DOCTOR_CREATE_BOOKING_FAILURE:
            return {
                ...state,
                fetching: false,
                fetched: false,
                fetchError: payload.error,
            };
        default:
            return state;
    }
};
