import React from "react";
import {Link} from "react-router-dom";

const Navbar = props =>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link className = {window.location.pathname === "/"? "active nav-item nav-link" :"nav-item nav-link"} to="/">Mongo Scraper</Link>
<Link className = {window.location.pathname === "/home"? "active nav-item nav-link" :"nav-item nav-link"} to="/">Home <span class="sr-only">(current)</span></Link>
<Link className = {window.location.pathname === "/articles"? "active nav-item nav-link" :"nav-item nav-link"} to="/articles">Saved Articles</Link>
<Link className = {window.location.pathname === "/scrape"? "active nav-item nav-link" :"nav-item nav-link"} to="/scrape">Scrape New Articles!</Link>

</nav>

export default Navbar;