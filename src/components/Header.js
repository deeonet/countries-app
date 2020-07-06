import React from "react";
import {Link} from "react-router-dom";

function Header(){

    return(
        <header className=" p-2 mb-3 bg-white navbar sticky-top w-100">
            <Link to="/">
                <h1 className="navbar-brand">Where in the world?</h1>
            </Link>
        </header>
    )
}
export default Header;