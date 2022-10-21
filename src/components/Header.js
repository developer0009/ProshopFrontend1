import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark py-2">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand> Store-Clone</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Nav className="justify-content-end">
              <LinkContainer to="/cart">
                <Nav.Link>
                  {" "}
                  <i className="fa-solid fa-cart-shopping"></i> cart{" "}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signin">
                <Nav.Link>
                  <i className="fa fa-user"></i> signin
                </Nav.Link>
              </LinkContainer>
            </Nav>{" "}
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
