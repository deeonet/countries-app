import React from "react";

function Country(props){

    return(
        <div className="card m-4 mr-auto" style={{'width': '18rem'}}>
            <img src={props.countryFlag} className="card-img-top" alt={`flag of ${props.countryName}`} height= {200}/>
                <div className="card-body shadow p-3 mb-5 bg-white rounded">
                    <p className="card-text font-weight-bold">
                        {props.countryName}
                    </p>
                    <div className="card-text d-flex flex-column">
                        <div>
                        <span>Population: </span><span>{props.countryPopulation}</span>
                         </div>
                        <div>
                            <span>Region: </span><span>{props.countryRegion}</span>
                        </div>
                        <div>
                            <span>Capital: </span><span>{props.countryCapital}</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Country;