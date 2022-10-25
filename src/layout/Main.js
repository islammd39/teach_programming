import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../shared/header/Header';
import LeftSide from '../shared/leftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm="12" lg="4">
                    <LeftSide></LeftSide>
                    </Col>
                    <Col>
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;