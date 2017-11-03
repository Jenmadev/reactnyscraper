import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Jumbotron from "./components/Jumbotron.js"
import Search from "./components/Search.js"
import SearchResults from "./components/SearchResults.js"
import SavedArticles from "./components/SavedArticles.js"
import NoMatch from "./components/NoMatch.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Navbar />
          <Jumbotron />
          <switch>
            <Route exact path="/" component ={Search}/>
            <Route exact path="/search" component ={Search}/>
            <Route exact path="/saved" component = {SavedArticles}/>
            {/* <Route component = {NoMatch}/> */}
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
