import React from "react";
import Country from "./Country";
import {Link} from "react-router-dom";

function CountriesGrid(props){
const arrayOfCountriesToDisplay  = props.countriesToDisplay;

    return(
        <div className = "d-flex flex-row flex-wrap justify-content-center">
            {arrayOfCountriesToDisplay.map( countryToDisplay =>
                    <Link to={`/country/${countryToDisplay.callingCodes[0]}`} key={countryToDisplay.name}>
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