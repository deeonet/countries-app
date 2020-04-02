import React, {useState, useEffect} from "react";
import Header from "./Header";
import Input from "./Input";
import Country from "./Country";

function BaseContainer(){
    const url = "https://restcountries.eu/rest/v2/all";
    const [countriesData, setCountriesData] = useState([]);

    useEffect( () => {

        const fetchData =  async () => {
             await fetch(url)
                 .then(res => res.json())
                .then(data => setCountriesData(data))
                .catch(err => console.log(err));

        }

        fetchData();
        //console.log( countriesData)

   }, []);

        console.log( countriesData)
        //countriesData.map( country => (console.log(country.name)))

    return(
        <div className="container-fluid">
            <div className="shadow p-3 bg-white m-2 rounded">
                <Header/>
            </div>
            <Input/>
            <Country/>
        </div>
    )
}

export default BaseContainer;