import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignUp = () => {
  return (
    <Container className="pt-3 bg-secondary">
      <Row>
        <Form>
          <Col lg={12}>
            <Row className="justify-content-lg-center">
              <Col lg="6">
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="name"
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
                  <Form.Control type="name" placeholder="Photo url" required />
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
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default SignUp;
