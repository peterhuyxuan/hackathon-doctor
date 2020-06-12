import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "antd";

import { logout } from "../services/auth/actions";

const Doctor = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {
        dispatch(logout());
        history.push("/");
    };
    return (
        <div className="mt-50">
            <h1>
                <Button type="primary" onClick={handleLogout}>Logout</Button>
            </h1>
        </div>
    );
};

export default Doctor;
