import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import './../styles/nav.css'
import {Container,Navbar, FormControl, Form, Button} from 'react-bootstrap'
import Search from "./Search"
import AllMovies from './AllMovies';

export default class Nav extends Component {
    state = {
        searchField:'',
        movies:[],
        stats:[]
    }
    render(){
        const {stats,searchField} =this.state
        const filterMovies = stats.filter(movie => (
            movie.title.toLowerCase().includes(searchField.toLowerCase())
        ))
    return (
        <Navbar bg="dark" expand="sm">
        <Container>
        <Navbar.Brand>
        <Link to='/'><img src="/imag/movie logo.png" alt="movielogo" className="movielogo"/></Link>
        </Navbar.Brand>
        <Form className="search">
            {/* <FormControl
            type="search"
            placeholder='search'
            id='gsearch'
            aria-label='Search'/> */}
            <Search placeholder="Search.." handleChange={(e) => this.setState({searchField:e.target.value})}/>
            <Button type="submit" variant="outlien-success" className="Sbutton">Search</Button>
            <AllMovies stats = {filterMovies} />
        </Form>
        <Link to="/signin" className="signin">Sign in</Link>
        <Link to="/signup" className="signup">Sign up</Link>
    </Container>
    </Navbar>
    )
    }
}
