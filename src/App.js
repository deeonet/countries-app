import React from 'react';
import HomePage from "./components/HomePage";
import "./assets/main.css"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import CountryInDetail from "./components/CountryInDetail";
import ErrorPage from "./components/ErrorPage";

function App() {
    return (
      <Router>
          <div className="App">
                <Switch>
                    <Route exact path="/" component= {HomePage} />

                    <Route path="/search/:id" component= {CountryInDetail} />

                    <Route path="/404" component={ErrorPage}/>

                    <Redirect to="/404" />
                </Switch>
          </div>
      </Router>

    );
}
export default App;