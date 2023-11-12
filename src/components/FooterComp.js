import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
    return ( 
    <div className="footer pb-3 pt-4">
        <Container>
            <Row>
                <Col className="text-end">
                    <i className="fa-brands fa-instagram text-white mx-lg-3 mx-2"></i>
                    <i className="fa-brands fa-twitter text-white mx-lg-3 mx-2"></i>
                    <i className="fa-brands fa-facebook text-white mx-lg-3 mx-2"></i>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col>
                <p className="text-center text-white-50">&copy; Copyright by Citra Ayu Rahmawati Mastery 2023, All Right Reserved.
                </p>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default FooterComp;