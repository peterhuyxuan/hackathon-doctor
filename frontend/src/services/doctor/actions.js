import {
    DOCTOR_GET_SYMPTOM_REQUEST,
    DOCTOR_GET_SYMPTOM_SUCCESS,
    DOCTOR_GET_SYMPTOM_FAILURE,
} from "./constants";

import * as api from "./api";

export const fetchSymptoms = () => {
    const request = () => ({ type: DOCTOR_GET_SYMPTOM_REQUEST });
    const success = (payload) => ({ type: DOCTOR_GET_SYMPTOM_SUCCESS, payload });
    const failure = (payload) => ({ type: DOCTOR_GET_SYMPTOM_FAILURE, payload });

    return (dispatch) => {
        dispatch(request());

        return api.fetchSymptoms().then(
            (response) => {
                const symptoms = response.data;
                dispatch(success({ symptoms }));
                return symptoms;
            },
            (error) => {
                dispatch(failure({ error }));
                throw error;
            }
        );
    };
};
