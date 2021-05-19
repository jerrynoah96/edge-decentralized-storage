import React from 'react';
import launchLogo from '../images/launchIcon.png';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';
import { Navbar, Nav} from 'react-bootstrap';
import '../App.css';


const NavBar = ()=> {

    return(
        <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home" className="brand">
        <img src={logo} alt="logo" className="brand-logo"/>{' '}
            Mirax
            </Navbar.Brand>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto nav-links">
                <Link className="nav-link" to="about" smooth={true} duration={1000}>About Us</Link>
                <Link className="nav-link" to="tokenEcons" smooth={true} duration={1000}>Tokeneconomics</Link>
                <Link className="nav-link" to="roadmap" smooth={true} duration={1000}>Roadmap</Link>
                <Link className="nav-link" to="team" smooth={true} duration={1000} >Team</Link>
                <Link className="nav-link" to="contact" smooth={true} duration={1000}>Contact Us</Link>
                <Link className="nav-link launch-link" href="#">Launch App <img src={launchLogo} alt="launchLogo" className="launch-logo"/> </Link>   
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar;