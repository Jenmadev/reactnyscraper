import axios from "axios";

export default {
 
// Saves Search Terms to the database
 getArticles: function(searchTerms) {
    return axios.post("/api/getArticles", searchTerms);
  }







}