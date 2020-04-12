import React from "react";
import Country from "./Country";

function CountriesGrid(props){
const b  = props.countriesToDisplay;

    return(
        <div className = "d-flex flex-row flex-wrap">
            {b.map( countryToDisplay =>

                <Country
                        countryName = {countryToDisplay.name}
                        countryPopulation = {countryToDisplay.population}
                        countryRegion = {countryToDisplay.region}
                        countryCapital = {countryToDisplay.capital}
                        countryFlag = {countryToDisplay.flag}
                        key = {countryToDisplay.name}
                    />

            )
            }
        </div>
    );
}

export default CountriesGrid;