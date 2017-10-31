import React from "react";

const Search = props =>
    <div class="container" id="box">
        <form>
            <h5><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> &nbsp; Search Parameters</h5> 
            <div class="form-group">
                <label for="Search Term">Search Term</label> 
                <input type="text" class="form-control" name ="q" placeholder= "Bruce Lee"/>
                <label for="page">Number of Records to Retrieve:</label>
                <select class="form-control" id="page">
                    <option>1</option>
                    <option>5</option>
                    <option>10</option>
                </select>
                <label for="Start Year (Optional):">Start Year (Optional):</label>
                <input type="text" class="form-control" name ="begin_8" placeholder= "2008"/>
                <label for="End Year (Optional):">End Year (Optional):</label>
                <input type="text" class="form-control" name ="end_8" placeholder= "1929"/>
            </div>
            <button type="search" class="btn btn-default btn-Style">Search</button>
            <button type="clear" class="btn btn-default btn-Style">Clear Results</button>
        </form>
    </div>
   
export default Search;