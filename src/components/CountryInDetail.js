import React , {useEffect, useState, useMemo} from "react";
import {Link, useHistory} from "react-router-dom";
import Header from "./Header";


function CountryInDetail(props) {
    const history = useHistory();   //needed for the "return to previous page" feature of react router
    const countryCode = props.match.params.id;  //The url parameter that tells the component which country detail to be fetched from the API
    const url = `https://restcountries.eu/rest/v2/alpha?codes=${countryCode}`;
    let countryDetails;        //This is an object that stores the static content to be displayed when this component is rendered

    const [countryToDisplayInDetail, setCountryToDisplayInDetail] = useState([]);
    const [countryAndAbbreviations, setCountryAndAbbreviations] = useState([]);

    let abbreviations = {};

    //This function helps to formt the country populations to include commas
    const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //A function that returns the length of an array argument
    const length = arr => arr.length;

    useEffect(() => {
        const fetchCountryDetail = () => {
            fetch(url)
                .then(res => res.json())
                .then(data => setCountryToDisplayInDetail(data))
                .catch(err => console.log(err))
        };

        fetchCountryDetail();
    }, [url, countryCode]);

    useEffect( () => {
        const fetchCountriesAndCountryCodes = () => {
            fetch(`https://restcountries.eu/rest/v2/all/?fields=name;alpha3Code`)
                .then(res => res.json())
                .then(data => setCountryAndAbbreviations(data))
                .catch(error => console.log(error))
        };
         fetchCountriesAndCountryCodes();
    }, [url, countryCode]);

    const [country, ...rest] = countryToDisplayInDetail;

    const updateCountryDetails = () => {
    //This conditional checks whether the data has been fetched or not and does the initialization of the object literal
        country ? countryDetails = {
                flagImage: country.flag,                       //single value
                countryName: country.name,                     //single value
                countryNativeName: country.nativeName,         //single value
                countryPopulation: country.population,         //single value
                countrySubRegion: country.subregion,           //single value
                countryRegion: country.region,                 //single value
                countryCapital: country.capital,               //single value
                countryCurrencies: country.currencies,         //array of objects
                countryLanguages: country.languages,           //array of objects
                countryBorderCountries: country.borders,      //array of objects
                countryTopLevelDomains: country.topLevelDomain
            } : countryDetails = {};

    };

    const assignCountryToAbbreviations = () => {
        countryAndAbbreviations.map(country => abbreviations[country.alpha3Code] = country.name );
    };

        //This hook ensures the content needed to render the component is initialized after the data has been fetched from the API
        useMemo(() => updateCountryDetails(), [ updateCountryDetails, country]);
        //This hook has a similar function to the one above, but in this case for the BorderCountries component
        useMemo(() => assignCountryToAbbreviations(), [countryAndAbbreviations, countryCode, assignCountryToAbbreviations]);

        return (
            <div>
                <Header/>
                <div className="">
                    {/** lol this button's code ought not to be so bulky, but we move lol**/}
                    <button onClick={history.goBack} className="text-dark btn btn-sm bg-white d-inline-block max-w-25 m-3 b-0 btn-sm px-3 shadow-lg rounded">
                        <svg className="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16"
                             fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                                  clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                                  clipRule="evenodd"/>
                        </svg> <span>Back</span>
                    </button>
                </div>

                {country ? <div className="container-fluid">

                    <div className="row d-flex flex-row flex-wrap align-items-center mx-auto mt-2">

                        <div className="col">
                            <img src={countryDetails.flagImage} alt={`flag of ${countryDetails.name}`} width={300} height={200}/>
                        </div>

                        <div className="col d-flex flex-column">
                            <h3 className="font-weight-bold">{countryDetails.countryName}</h3>

                            <div className="row">
                                <div className="col d-flex flex-column">
                                    <ul className="list-unstyled">
                                        <li className="py-1 font-weight-bold">  Native name: <span className="font-weight-normal">{countryDetails.countryNativeName}</span></li>
                                        <li className="py-1 font-weight-bold">  Region: <span className="font-weight-normal">{countryDetails.countryRegion}</span> </li>
                                        <li className="py-1 font-weight-bold">  Sub region: <span className="font-weight-normal">{countryDetails.countrySubRegion}</span></li>
                                        <li className="py-1 font-weight-bold">  Capital: <span className="font-weight-normal">{countryDetails.countryCapital}</span></li>
                                        <li className="py-1 font-weight-bold">  Population: <span className="font-weight-normal">{ numberWithCommas(countryDetails.countryPopulation) }</span></li>
                                    </ul>
                                </div>
                                <div className="col d-flex flex-column">
                                    <ul className="list-unstyled">
                                        <li className="py-1 font-weight-bold"> Top level domain: <span className="font-weight-normal">{countryDetails.countryTopLevelDomains}</span></li>
                                        <li className="py-1 font-weight-bold"> Currencies: { countryDetails.countryCurrencies.map( (currency, index ) =>
                                                <span key = {index} className="px-1 font-weight-normal">{currency.name} {index < (length(countryDetails.countryCurrencies) - 1) && <span>|</span>}</span>
                                            )}
                                        </li>
                                        <li className="py-1 font-weight-bold">  Languages: {countryDetails.countryLanguages.map( (language, index) =>
                                            <span className="px-1 font-weight-normal" key={index}>{language.name} {index < (length(countryDetails.countryLanguages) - 1) && <span>|</span>}</span>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="font-weight-bold">
                                Border countries:
                                <ul className="list-inline"> { countryDetails.countryBorderCountries.map( (borderCountry, index) =>
                                        <Link to={`/search/${borderCountry}`} key={borderCountry}>
                                            <li key = {index} className="font-weight-normal text-info d-inline-block list-inline-item border mt-2 m-1 shadow-lg px-3 rounded">{abbreviations[borderCountry]}</li>
                                        </Link>
                                    )}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div> :
                    <div className="p-5">Loading...</div>
                }
            </div>
        )
}
export default CountryInDetail;