import React, {useState} from "react";
import Header from "./Header";
import Input from "./Input";
import Country from "./Country";

function BaseContainer(){
    const url = "https://restcountries.eu/rest/v2/all";
    const [countriesData, setCountriesData] = useState([]);

    React.useEffect( () => {

        const fetchData =  async () => {
             await fetch(url)
                 .then(res => res.json())
                .then(data => setCountriesData(data))
                .catch(err => console.log(err));

        }

        //fetchData();
        //console.log( countriesData)

   }, []);

       // console.log( countriesData)
        //countriesData.map( country => (console.log(country.name)))

    return(
        <div className="container-fluid">
            <Header/>
                <Input/>
                <Country/>
        </div>
    )
}

export default BaseContainer;