import React from "react";

function Input(props){

    return(
        <div className="d-inline shadow p-3 mb-5 bg-auto rounded">
                <input type="text" placeholder="Search for a country.." className = "p-2 w-75 " onChange={ e => props.handleInputValue(e.target.value)} value={props.newValue}/>
        </div>
    )
}
export default Input;