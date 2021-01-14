import React from 'react'
import '../index.css'
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Navbar,Nav } from 'react-bootstrap'

const useStyles = makeStyles({
    navPadding: {paddingLeft: "40px", paddingTop: "15px"},
    navText: {color: 'black', font: 'medium'}
});

const NavBar = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="row">
                <div className="navStyle">
                    <Navbar bg="light" variant="light" expand="lg" fixed="top" className={classes.navPadding}>
                        <Navbar.Brand href="/">Samika</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/" className={classes.navText}>Portfolio</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
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