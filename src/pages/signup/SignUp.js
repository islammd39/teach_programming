import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
   const {newUserSignIn} = useContext(AuthContext)

   const [error, setError] = useState('')
   const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    newUserSignIn(email, password)
    .then(result=>{
      const user = result.user;
      form.reset()
      console.log(user);
      setError('')
      navigate('/')
    })
    .catch(error=>{
      setError(error.message)
      console.error(error);
      toast("sorry it's not right input!")
    })
  }
  return (
    <Container className="pt-3 bg-secondary">
      <Row>
        <Form onSubmit={handleSubmit}>
          <Col lg={12}>
            <Row className="justify-content-lg-center">
              <Col lg="6">
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Name Surname"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col lg={12}>
            <Row className="justify-content-lg-center">
              <Col lg="6">
                <Form.Group className="mb-3">
                  <Form.Label>Photo Url</Form.Label>
                  <Form.Control type="text" name="photo" placeholder="Photo url" required />
                </Form.Group>
              </Col>
            </Row>
          </Col>
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

          <Row className="justify-content-lg-center mb-3">
            <Col lg="auto">
              <Button variant="primary" type="submit">
                Sign up
              </Button>
            </Col>
            <Form.Text className="text-warning d-inline-block text-center">Already Have An account please <Link to="/login" className="text-info">LOGIN</Link></Form.Text>
          </Row>
          <Form.Text className="text-warning">{error}</Form.Text>
        </Form>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default SignUp;
