import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Jumbotron from "./components/Jumbotron.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Navbar/>
          <Jumbotron />
        </div>
      </Router>
    );
  }
}

export default App;
