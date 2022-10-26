import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
  const [error, setError] = useState('')
  const {userProvider, SignIn} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const from = location?.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSign = () =>{
     userProvider(googleProvider)
     .then(result =>{
      const user = result.user;
      console.log(user);
     })
     .catch(error =>{
      console.error(error);
     })
  }
  const logInSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    SignIn(email, password)
    .then(result=>{
      const user = result.user;
      form.reset()
      setError('')
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch(error=>{
      setError(error.message)
      toast("sorry it's not right input!")
      console.error(error);
    })
  }



  return (
    <Container className="pt-3 bg-secondary">
      <Row>
        <Form onSubmit={logInSubmit} className="mt-2">
          <Col lg={12}>
            <Row className="justify-content-lg-center">
              <Col lg="6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={12}>
            <Row className="justify-content-lg-center">
              <Col lg="6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Row className="justify-content-lg-center mt-3 mb-3">
            <Col lg="auto">
              <Button variant="primary" type="submit">
                Log in
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-lg-center">
            <Col lg="auto">
              <Button onClick={handleGoogleSign} variant="outline-warning" type="submit">
                <FaGoogle className="me-2"></FaGoogle>
                Login with Google
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-lg-center mt-3 mb-3">
            <Col lg="auto">
              <Button variant="outline-dark" type="submit">
                <FaGithub className="me-2"></FaGithub>
                Login with GitHub
              </Button>
            </Col>
              <Form.Text className="text-warning d-inline-block text-center">Do Not Have An account please <Link to="/signup" className="text-info">REGISTER</Link></Form.Text>
          </Row>
        </Form>
      </Row>
      <ToastContainer />
              <Form.Text className="text-warning">{error}</Form.Text>
    </Container>
  );
};

export default LogIn;
