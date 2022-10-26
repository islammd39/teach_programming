import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaBook, FaUser } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { Button, Image } from "react-bootstrap";
import "../header/Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(user);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaBook></FaBook>Programming Languages
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link active as={Link} to="/">
              Tutorial
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>

            <Nav.Link className="mt-0" as={Link} to="/">
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button className="mt-0" onClick={handleSignOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <div className="d-flex">
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </div>
              )}
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              {user?.photoURL ? (
                <Image
                  style={{ height: "25px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
              <div className="container">
                <span style={{ color: darkMode ? "grey" : "yellow" }}></span>
                <div className="switch-checkbox">
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className="slider round"> </span>
                  </label>
                </div>
                <span style={{ color: darkMode ? "#c96dfd" : "grey" }}></span>
              </div>
              <div></div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
