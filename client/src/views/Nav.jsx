import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import './nav.css'
import {Row, Container,Col } from 'react-bootstrap'

export default function Nav (){
    return (
    //    <div className="navdiv">
    //     <Router>
    //    <Link to="/"><img src="/imag/movie logo.png" alt="movielogo" className="movielogo"/></Link>
    //     </Router>    
    //     <Router>
    //     </Router>
    //    </div>
    <Container>
        <Row className="navdiv">
            <Col><Link to="/"><img src="/imag/movie logo.png" alt="movielogo" className="movielogo"/></Link>
            </Col>

            <Col xs ={7}>
            <label for="gsearch"></label>
            <input type="search" id="gsearch" name="gsearch" ></input>      
            </Col>
            <Col>
            <Link to="/login" className="login">Login</Link>
            </Col>
        </Row>   
    </Container>
    )
}
