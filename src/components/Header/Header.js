import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={`${classes.cont} py-1`}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand className="fs-3" href="#home">
          The Generics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto  fs-5 ">
            <Nav.Link href="#link">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <HeaderCartButton onShowCart={props.onShowCart} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
