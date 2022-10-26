import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBook, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
import { Image } from 'react-bootstrap';


const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = ()=>{
    logOut()
    .then(()=>{
     
    })
    .catch(error=>{
      console.error(error);
    })
  }
  console.log(user);
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'><FaBook></FaBook>Programming Languages</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link active as={Link} to="/">Tutorial</Nav.Link>
              <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                
              <Nav.Link as={Link} to="/login">
              {
                  user?.uid ?
                 <>
                  <span>{user?.displayName}</span>
                  <button onClick={handleSignOut}>Log out</button>
                 </>
                  :
                  <div className='d-flex'>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
                  </div>
                 
                }
              </Nav.Link>
                        
              <Nav.Link as={Link} to='/'>{user?.photoURL ? 
              <Image style={{height:'25px'}} roundedCircle src={user?.photoURL}></Image>:
              <FaUser></FaUser> }
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;