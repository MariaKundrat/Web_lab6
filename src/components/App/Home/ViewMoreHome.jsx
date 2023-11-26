import React from "react";
import "./ViewMoreHome.scss";

const ViewMoreHome = ({ onClick }) => {
    return (
        <div className="button_div">
        <button className="view_more_button" onClick={onClick}> View more </button>
    </div>
    );
}

export default ViewMoreHome;