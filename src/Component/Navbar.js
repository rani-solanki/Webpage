import React, { Fragment } from "react";

const Navbar = () => {
    return (
        <Fragment>
            <div className="navbar">
                <div className="logo">
                    <h4 style={{left:"100px",top:"1.5rem",  position: "absolute"}}> RatedDriving </h4>
                    <h6 style={{left:"1000px",top:"2rem",  position: "absolute"}}>Sign In</h6>
                    <button className="bottom-now"> Join now</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Navbar;
