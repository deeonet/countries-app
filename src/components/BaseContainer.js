import React, {useState, useEffect, useMemo} from "react";
import Header from "./Header";
import Input from "./Input";
import CountriesGrid from "./CountriesGrid";

function BaseContainer(){
    const url = "https://restcountries.eu/rest/v2/all";
    const [countriesData, setCountriesData] = useState([]);
    const [countriesForGridDisplay, setCountriesForGridDisplay] = useState([]);

    let arr = [];

    while(arr.length<8){
        const b  = Math.floor(Math.random()*200) ;
        if(arr.indexOf(b) === -1 ) arr.push(b);
    }
    console.log(arr)

    useEffect( () => {

        const fetchData = () => {
                fetch(url)
                 .then(res => res.json())
                .then(data => setCountriesData(data))
                .catch(err => console.log(err));

        }

        fetchData();


   }, []);


    const k = () => {

        const a = [countriesData[(arr[0])], countriesData[(arr[1])], countriesData[(arr[2])], countriesData[(arr[3])], countriesData[(arr[4])], countriesData[(arr[5])], countriesData[(arr[6])], countriesData[(arr[7])],];
        const b = a.filter(word => word !== undefined);

        if(b.length > 0){
            setCountriesForGridDisplay(a);
        }


    }

   useMemo( () => k(), [countriesData]);


    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="container-fluid">

                <Input/>
                {countriesData && <CountriesGrid countriesToDisplay = {countriesForGridDisplay}/>}

            </div>
        </div>

    )
}

export default BaseContainer;