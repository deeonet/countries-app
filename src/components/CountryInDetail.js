import React , {useEffect, useState, useMemo} from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function CountryInDetail(props) {
    const history = useHistory();
    const countryCallingCode = props.match.params.id;
    const url = `https://restcountries.eu/rest/v2/callingcode/${countryCallingCode}`;
    let countryDetails;        //This is an object that stores the content to be displayed when this component is rendered

    const [countryToDisplayInDetail, setCountryToDisplayInDetail] = useState([]);

    useEffect(() => {
        const fetchCountryDetail = () => {
            fetch(url)
                .then(res => res.json())
                .then(data => setCountryToDisplayInDetail(data))
                .catch(err => console.log(err))
        };
        fetchCountryDetail();
    }, [url]);

    const [country, ...rest] = countryToDisplayInDetail;

    const updateCountryDetails = () => {
    //This conditional checks whether the data has been fetched or not
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
        //This hook ensures the content needed to render the component is initialized after the data has been fetched from the API
        useMemo(() => updateCountryDetails(), [countryToDisplayInDetail]);

        return (
            <div>
                <Header/>

                <div>
                    {/** lol this button ought not to be so bulky, but we move **/}
                    <button onClick={history.goBack} className="btn-secondary btn-sm py-1 px-3">
                        <svg className="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16"
                             fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                                  clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                </div>

                {country ? <div className="container-fluid">
                    <div className="row d-flex flex-row flex-wrap">

                        <div className="col">
                            <img src={countryDetails.flagImage} alt={`flag of ${countryDetails.name}`} width={500} height={400}/>
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
                                        <li className="py-1 font-weight-bold">  Population: <span className="font-weight-normal">{countryDetails.countryPopulation}</span></li>
                                    </ul>
                                </div>
                                <div className="col d-flex flex-column">
                                    <ul className="list-unstyled">
                                        <li className="py-1 font-weight-bold"> Top level domains: <span className="font-weight-normal">{countryDetails.countryTopLevelDomains}</span></li>
                                        <li className="py-1 font-weight-bold"> Currencies: { countryDetails.countryCurrencies.map( (currency, index ) =>
                                            <span key = {index} className="px-1 font-weight-normal">{currency.name}</span>
                                            )}
                                        </li>
                                        <li className="py-1 font-weight-bold">  Languages: {countryDetails.countryLanguages.map( (language, index) =>
                                            <span className="px-1 font-weight-normal" key={index}>{language.name}</span>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="font-weight-bold">
                                Border countries:
                                <ul className="list-inline">
                                    {countryDetails.countryBorderCountries.map( (borderCountry, index) =>
                                    <li key = {index} className="px-2 font-weight-normal list-inline-item border px-2 mt-2">{borderCountry}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div> :
                    <div className="p-5">
                        Loading...
                    </div>
                }
            </div>
        )
}
export default CountryInDetail;