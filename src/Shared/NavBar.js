import React, { useContext } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link, useHistory } from "react-router-dom";
import { LogInContext } from "../App";
import firebase from "firebase/app";
import "firebase/auth";

const NavBar = () => {
  const [SignedInUser, setSignedInUser] = useContext(LogInContext);
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "2rem",
    marginLeft: "2rem",
  };
  let history = useHistory();
  const handleSignOutButton = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setSignedInUser(false);
        history.push("/home");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <span style={{ color: "skyblue" }}>E</span>-MARKETING
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link style={linkStyle} to="/home">
              Home
            </Link>
            <Link style={linkStyle} to="/services">
              Services
            </Link>
            <Link style={linkStyle} to="/about">
              About
            </Link>
          </Nav>
          <Nav>
            <div>
              <img
                style={{ width: "40px", borderRadius: "50%" }}
                src={SignedInUser.photoURL}
                alt=""
              />
              {SignedInUser.displayName}
            </div>
            <div>
              {!SignedInUser.displayName && (
                <Link to="/sign-in">
                  <Button>Sign In</Button>
                </Link>
              )}
              {SignedInUser.displayName && (
                <Button onClick={() => handleSignOutButton()}>Sign Out</Button>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
