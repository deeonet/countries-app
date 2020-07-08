import React from "react";
import Country from "./Country";
import {Link} from "react-router-dom";

function CountriesGrid(props){

const arrayOfCountriesToDisplay  = props.countriesToDisplay;

    return(
        <div className = "d-flex flex-row flex-wrap mx-auto w-100">
            {arrayOfCountriesToDisplay.map( countryToDisplay =>
                    <Link to={`/search/${countryToDisplay.alpha3Code}`} key={countryToDisplay.name}>
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
        </div> );
}

export default CountriesGrid;