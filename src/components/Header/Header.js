import React, { useContext } from "react";

import WebContext from "../../context/web-context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  const ctx = useContext(WebContext);
  const isLoggedIn = ctx.isLoggedIn;

  const logoutHandler = () => {
    ctx.logout();
  };

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={`${classes.cont} py-1`}
      data-bs-theme="dark"
    >
      <Container>
        {/* <Navbar.Brand className="fs-3" href="#home">
          The Generics
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" fs-5 ">
            <NavLink to="/" className="nav-link d-inline me-3">
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink to="/store" className="nav-link d-inline me-3">
                Store
              </NavLink>
            )}
            <NavLink to="/about" className="nav-link d-inline me-3">
              About
            </NavLink>
            {!isLoggedIn && (
              <NavLink to="/login" className="nav-link d-inline me-3">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
        <Nav>
          {isLoggedIn && (
            <Button
              variant="light"
              className="me-3 fw-bold"
              onClick={logoutHandler}
            >
              Logout
            </Button>
          )}
        </Nav>
        <Nav>
          {isLoggedIn && props.isCartVisible && (
            <HeaderCartButton onShowCart={ctx.showCart} />
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
