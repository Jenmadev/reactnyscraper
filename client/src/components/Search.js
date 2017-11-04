import React, { Component } from "react";
import API from "../utils/API.js"

class Search extends Component {
    state = {
       articles: [],
        searchTerm: "",
        startYear: "",
        endYear: ""
      };
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event.target);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm) {
            API.getArticles({
                searchTerm: this.state.searchTerm,
                startYear: this.state.startYear,
                endYear: this.state.endYear
              })
            console.log(this.state.searchTerm);
        }
    };




    render() {
        return (
        <div className="container" id="box">
            <form>
                <h5><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> &nbsp; Search Parameters</h5> 
                <div className="form-group">
                    <label htmlFor="Search Term">Search Term</label> 
                    <input value ={this.state.searchTerm} onChange={this.handleInputChange}type="text" className="form-control" name ="searchTerm" placeholder= "Bruce Lee"/>
                    <label htmlFor="Start Year (Optional):">Start Year (Optional):</label>
                    <input value ={this.state.startYear} onChange={this.handleInputChange}type="text" className="form-control" name ="startYear" placeholder= "2008"/>
                    <label htmlFor="End Year (Optional):">End Year (Optional):</label>
                    <input value ={this.state.endYear} onChange={this.handleInputChange} type="text" className="form-control" name ="endYear" placeholder= "1929"/>
                </div>
                <button onClick={this.handleFormSubmit} type="search" className="btn btn-default btn-Style">Search</button>
                {/* <button type="clear" class="btn btn-default btn-Style">Clear Results</button> */}
            </form>
        </div>
        );
    } 
}
   
export default Search;