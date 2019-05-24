import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import "../styles/Menu.css" 

export class Menu extends React.Component<{}> {
  render() {
    return (

      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" variant="pills">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            
          </Nav>
          <Nav variant="pills">
            <NavDropdown title="Links" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/">
                  <img src = {require("../images/LinkedInLogo.png")} height = "30vmin" width = "30vmin" title = "LinkedIn"/>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}