import React from "react";

function Country(props){

    const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return(
        <div className="card m-4 mr-auto" style={{'width': '18rem'}}>
            <img src={props.countryFlag} className="card-img-top" alt={`flag of ${props.countryName}`} style={{'width': '18rem', 'height': '12rem'}}/>
                <div className="card-body shadow p-3 mb-5 bg-white rounded">
                    <h5 className="card-text font-weight-bold">
                        {props.countryName}
                    </h5>
                    <div className="card-text d-flex flex-column">
                        <div>
                            <span className="font-weight-bold">Population: </span><span>{ numberWithCommas(props.countryPopulation)}</span>
                         </div>
                        <div>
                            <span className="font-weight-bold">Region: </span><span>{props.countryRegion}</span>
                        </div>
                        <div>
                            <span className="font-weight-bold">Capital: </span><span>{props.countryCapital}</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Country;