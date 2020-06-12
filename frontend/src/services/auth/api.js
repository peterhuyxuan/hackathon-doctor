import instance from "../../axios";

export const login = (email, password) =>
    instance.post("/user/token/", { email, password });
