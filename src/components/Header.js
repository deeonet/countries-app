import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Header(){

    const darkModeIcon = <FontAwesomeIcon icon={faMoon} />;

    return(
        <header className="d-flex justify-content-between p-2 m-0 mb-5 bg-white navbar">
            <Link to="/">
                <h3 className="navbar-brand">Where in the world?</h3>
            </Link>
            <span>{darkModeIcon} Dark Mode</span>
        </header>
    )
}

export default Header;