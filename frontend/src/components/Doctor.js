import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col } from "antd";

import { logout } from "../services/auth/actions";
import { fetchMe } from "../services/user/actions";

const Doctor = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bookingevent_set } = useSelector((state) => state.user.me);

    useEffect(() => {
        dispatch(fetchMe());
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        history.push("/");
    };
    
    return (
        <div className="mt-50">
            <h1>
                <Button type="primary" onClick={handleLogout}>
                    Logout
                </Button>
            </h1>
            <Row>
                {bookingevent_set.map((event) => (
                    <Col key={event.id} xs={2} sm={4} md={6} lg={8} xl={10}>
                        {event.request}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Doctor;
