import instance from "../../axios";

export const fetchSymptoms = () => instance.get("/doctor/symptoms/");

export const createBooking = ({
    first_name,
    last_name,
    age,
    gender,
    symptoms,
    email,
}) =>
    instance.post("/doctor/booking-request/", {
        first_name,
        last_name,
        age,
        gender,
        symptoms,
        email,
    });
