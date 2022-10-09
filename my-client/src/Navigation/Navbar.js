import React from "react";


function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={require("./profile.jpeg")} width="40" height="40" class="d-inline-block align-top" alt="" />
                    Media Library
                </a>
        </nav>
    );
}

export default Navbar;