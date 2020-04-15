import React from "react";
import Country from "./Country";
import {Link} from "react-router-dom";

function CountriesGrid(props){
const b  = props.countriesToDisplay;

    return(
        <div className = "d-flex flex-row flex-wrap justify-content-center">
            {b.map( countryToDisplay =>

                    <Link to={`/countryInDetail`}>
                        <Country
                            countryName = {countryToDisplay.name}
                            countryPopulation = {countryToDisplay.population}
                            countryRegion = {countryToDisplay.region}
                            countryCapital = {countryToDisplay.capital}
                            countryFlag = {countryToDisplay.flag}
                            key = {countryToDisplay.name}
                        />
                    </Link>

            )
            }
        </div>
    );
}

export default CountriesGrid;