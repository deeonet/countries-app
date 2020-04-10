import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Header(){

    const darkModeIcon = <FontAwesomeIcon icon={faMoon} />;

    return(
        <header className="d-flex justify-content-between">
            <h3 className="">Where in the world?</h3>
            <span>{darkModeIcon} Dark Mode</span>
        </header>
    )
}

export default Header;