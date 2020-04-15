import React from 'react';
import HomePage from "./components/HomePage";
import "./assets/main.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CountryInDetail from "./components/CountryInDetail";

function App() {
    const homePage = HomePage;
    const country = CountryInDetail;

  return (
      <Router>
          <div className="App">

                <Switch>
                    <Route exact path="/" component= {homePage} />

                    <Route exact path="/countryInDetail" component= {country} />
                </Switch>


          </div>
      </Router>

  );
}

export default App;
