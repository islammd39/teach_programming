import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';


const Header = () => {
  const {user} = useContext(AuthContext)
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'><FaBook></FaBook>Programming Languages</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link active as={Link} to="/">Tutorial</Nav.Link>
              <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/signup'>
                  Signup
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='/blog'>{user.DisplayName}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;