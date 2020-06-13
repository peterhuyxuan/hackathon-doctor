import React from "react";
import { useSelector } from "react-redux";
import CeneteredLayout from "../containers/CenteredLayout";

const BookingEvent = () => {
    const { bookingevent_set } = useSelector(
        (state) => state.doctor.bookingevent
    );
    return (
        <CeneteredLayout>
            {bookingevent_set.map((event) => (
                <h1 key={event}>{event}</h1>
            ))}
        </CeneteredLayout>
    );
};

export default BookingEvent;
