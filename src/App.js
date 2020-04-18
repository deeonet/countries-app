import React from 'react';
import HomePage from "./components/HomePage";
import "./assets/main.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CountryInDetail from "./components/CountryInDetail";

function App() {
    //const country = CountryInDetail;

    return (
      <Router>
          <div className="App">
                <Switch>
                    <Route exact path="/" component= {HomePage} />

                    <Route path="/country/:id" component= {CountryInDetail} />
                </Switch>
          </div>
      </Router>

    );
}
export default App;
