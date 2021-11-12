import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './nav.css'

export default function Nav (){
    return (
       <div className="navdiv">
        <Router>
           <Link to="/"><img src="/imag/movie logo.png" alt="movielogo" className="movielogo"/></Link>
        </Router>    
        <label for="gsearch"></label>
        <input type="search" id="gsearch" name="gsearch" ></input>
        <Router>
            <Link to="/login" className="login">Login</Link>
        </Router>
       </div>
    )
}
