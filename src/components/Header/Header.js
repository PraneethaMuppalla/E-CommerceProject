import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/" className="nav-link d-inline me-3">
              Home
            </NavLink>
            <NavLink to="/store" className="nav-link d-inline me-3">
              Store
            </NavLink>
            <NavLink to="/about" className="nav-link d-inline me-3">
              About
            </NavLink>
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
