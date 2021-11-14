import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import './nav.css'
import {Container,Navbar, FormControl, Form, Button} from 'react-bootstrap'

export default function Nav (){
    return (
        <Navbar bg="dark" expand="sm">
        <Container>
        <Navbar.Brand>
        <Link to='/'><img src="/imag/movie logo.png" alt="movielogo" className="movielogo"/></Link>
        </Navbar.Brand>
        <Form className="search">
            <FormControl
            type="search"
            placeholder='search'
            id='gsearch'
            aria-label='Search'/>
            <Button variant="outlien-success" className="Sbutton">Search</Button>
        </Form>
        <Link to="/login" className="login">Login</Link>
        <Link to="/signup" className="login">Signup</Link>
    </Container>
    </Navbar>
    )
}
