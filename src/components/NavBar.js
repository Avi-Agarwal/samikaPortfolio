import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import {titleStyle, navPadding, navText} from "../styles";

const NavBar = () => {
    return (
        <div>
            <div className="row">
                <div className="navStyle">
                    <Navbar variant="light" expand="lg" fixed="top"  style={navPadding}>
                        <Navbar.Brand href="/" style={titleStyle}>SAMIKA</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link style={navText} href="/">Portfolio</Nav.Link>
                                <Nav.Link style={navText} href="/blog">Blog</Nav.Link>
                                <Nav.Link style={navText} href="/contact">Contact</Nav.Link>
                                <Nav.Link style={navText} href="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;