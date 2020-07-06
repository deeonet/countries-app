import React from 'react'
import Header from "./Header";
import {Link} from "react-router-dom";
import HomePage from "./HomePage";

function ErrorPage({location}){
    return(
        <div>
            <Header />
        <h2 className="p-5 m-3 ">
            Error 404: Page not Found
        </h2>
            <p>No match found for <code>{location.pathname}</code></p>
            <Link to="/">
                <p>Return to Homepage</p>
            </Link>
        </div>
    );

}
export default ErrorPage;