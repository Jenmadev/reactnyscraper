import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Jumbotron from "./components/Jumbotron.js"
import Search from "./components/Search.js"
import SavedArticles from "./components/SavedArticles.js"
import NoMatch from "./components/NoMatch.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component ={Search}/>
            <Route exact path="/search" component ={Search}/>
            <Route exact path="/saved" component = {SavedArticles}/>
            {/* <Route component = {NoMatch}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
