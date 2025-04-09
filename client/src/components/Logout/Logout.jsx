import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({handleRemoveCookie}) {

    const navigate = useNavigate();

    const handleClick = () => {
        handleRemoveCookie();
        navigate("/");
    }

    return (<div>
        <h2>If you want to log out click here</h2>
        <button onClick={handleClick}>Log out</button>
    </div>)
};