import React from "react";
import "./CenteredLayout.css";

const CenteredLayout = ({ children }) => (
    <div className="centered-layout">
        <div>{children}</div>
    </div>
);

export default CenteredLayout;
