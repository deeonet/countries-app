import React, {useState, useEffect, useMemo} from "react";
import Header from "./Header";
import Input from "./Input";
import CountriesGrid from "./CountriesGrid";


function HomePage(){
    const url = "https://restcountries.eu/rest/v2/all"; //Api endpoint for the app
    const [countriesData, setCountriesData] = useState([]);
    const [countriesForGridDisplay, setCountriesForGridDisplay] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const countryAbbreviations = {};

    //An array to store random countries that'll be displayed on the homepage on load
    let arr = [];
    //The logic to carry out the assignment of countries to the array
    while(arr.length<8){
        const b  = Math.floor(Math.random()*250) ;
        if(arr.indexOf(b) === -1 ) arr.push(b); //This conditional ensures no country is displayed more than once
    }

    useEffect( () => {

        const fetchData = () => {
                fetch(url)
                 .then(res => res.json())
                .then(data => setCountriesData(data))
                .catch(err => console.log(err));
        }

        fetchData();
   }, []);

    const handleInput = val => setInputValue(val);

    const updateCountriesForDisplay = () => {
        const a = [countriesData[(arr[0])], countriesData[(arr[1])], countriesData[(arr[2])], countriesData[(arr[3])], countriesData[(arr[4])], countriesData[(arr[5])], countriesData[(arr[6])], countriesData[(arr[7])],];
        //This line ensures the array to be used isn't initialized with the value "undefined" as is the case before data
        //is fetched from the api
        const b = a.filter(word => word !== undefined);

        //The conditional enforces the reason stated above
        if(b.length > 0){
            setCountriesForGridDisplay(a);
        }
    };

    const k = () => {
        arr.length = 0;
        if(inputValue.trim()){
            countriesData.map( (country, index) => {
                if((country.name.toLowerCase().indexOf(inputValue.trim().toLowerCase()) !== -1) && arr.length <= 8){
                    arr.push(country)
                }
            });
        } else{
            while(arr.length<8){
                const b  = Math.floor(Math.random()*250) ;
                if(arr.indexOf(b) === -1 ) arr.push(b); //This conditional ensures no country is displayed more than once
            }
            updateCountriesForDisplay();
            return;
        }
        setCountriesForGridDisplay(arr);
    }

    useMemo( () => updateCountriesForDisplay(), [countriesData]);

    useMemo(() => k(), [inputValue]);

    countriesData.map( country => countryAbbreviations[`${country.alpha3Code}`] = country.name);

    const a = countryAbbreviations;

    return(
            <div>
                    <Header/>
                    <div className="container">
                            <Input handleInputValue={handleInput} newValue={inputValue} />
                        {countriesData && <CountriesGrid countriesToDisplay = {countriesForGridDisplay}/>}
                    </div>
            </div>
    );
}
export default  HomePage ;