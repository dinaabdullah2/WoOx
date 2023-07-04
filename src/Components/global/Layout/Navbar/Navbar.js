import React from "react"
import "./Navbar.css"
import logo from "../../../../../src/assets/logo.png"
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarC(){
    return(
       
          <Navbar className="Nav" expand="lg">
          <Container>
          <Navbar.Brand className="navbar-brand-edit" href="#home">
             <img src={logo} />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" navbar-nav-edit ms-auto">
              <NavLink className="nav-link  nav-item-edit" to="/" href="#">Home</NavLink>
              <NavLink className="nav-link nav-item-edit" to="/about" href="#">About</NavLink>
              <NavLink className="nav-link nav-item-edit" to="/deals" href="#">Deals</NavLink>
              <NavLink className="nav-link nav-item-edit" to="/reservation" href="#">Reservation</NavLink>
              <NavLink className="nav-link nav-item-edit" to="/book Yours" href="#">Book Yours</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
    )
}