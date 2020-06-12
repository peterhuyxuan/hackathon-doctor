import instance from "../../axios";

export const fetchSymptoms = () =>
    instance.get("/doctor/symptoms/");
