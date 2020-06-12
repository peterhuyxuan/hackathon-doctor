import instance from "../../axios";

export const register = ({
    name,
    email,
    password,
    registration_number,
    profession,
    registration_expiry_date
}) =>
    instance.post("/user/create/", {
        name,
        email,
        password,
        registration_number,
        profession,
        registration_expiry_date,
    });

export const fetchMe = () => instance.get("/user/me/");
