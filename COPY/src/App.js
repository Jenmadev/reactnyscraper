import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Jumbotron from "./components/Jumbotron.js"
import Search from "./components/Search.js"
import SearchResults from "./components/SearchResults.js"
import SavedArticles from "./components/SavedArticles.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Jumbotron />
          <Search />
          <SearchResults />
          <SavedArticles />
        </div>
      </Router>
    );
  }
}

export default App;
