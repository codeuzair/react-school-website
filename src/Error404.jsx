import React from "react";
import { NavLink } from "react-router-dom";
function Error404(){
    return(
        <>
            <div style={{backgroundColor:"black"}}>
                <h1>404 page Error</h1>
                <p>SOrry this page does not exists</p>
                <NavLink to={"/"}>Go to Home</NavLink>
            </div>
        </>
    );
};
export default Error404;