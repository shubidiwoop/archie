import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Archie</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                     </Nav>
                    <Nav>
                        <Nav.Link href="">Sign In / Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>   
        </div>
    );

}

export default NavigationBar;