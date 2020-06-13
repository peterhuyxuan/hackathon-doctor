import React from "react";
import { useSelector } from "react-redux";

const BookingEvent = () => {
    const { bookingevent_set } = useSelector((state) => state.doctor.bookingevent);
    return (
        bookingevent_set.map(event => <div>{event.id}</div>)
    );
};

export default BookingEvent;
