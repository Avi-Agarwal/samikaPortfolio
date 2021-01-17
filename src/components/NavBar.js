import React from 'react'
import {Navbar, Nav, Form} from 'react-bootstrap'
import {titleStyle, navPadding, navText} from "../styles";
import {LinkedinLogo} from "../assets/LinkedIn";
import {InstagramLogo} from "../assets/InstagramLogo";

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
                                <Nav.Link style={navText} href="/about">About</Nav.Link>
                                <Nav.Link style={navText} href="/contact">Contact</Nav.Link>
                            </Nav>
                            <Form inline>
                                <Nav.Link href="https://www.linkedin.com/in/samika-agarwal-609999202/" target="_blank">
                                    <LinkedinLogo/>
                                </Nav.Link>
                                <Nav.Link href="https://www.instagram.com/ssamiika/" target="_blank">
                                    <InstagramLogo/>
                                </Nav.Link>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default NavBar;