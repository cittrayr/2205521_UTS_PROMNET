import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicesComp = () => {
    return (
        <div className="min-vh-100 d-flex">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center fw-bold">About Me</h1>
                    <p className="text-center">I would like to introduce my self, my name is Citra Ayu Rahmawati and you can call me Citra. I live in Subang. I was born in Subang, exactly 12th of february 2002. a third-semester student in the Computer Science Education program, class A of 2022, at the Universitas Pendidikan Indonesia.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesComp;