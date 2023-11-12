import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 

const HeroComp = () => {
  return (
  <div className="hero min-vh-100 w-100">
    <Container>
     <Row>
        <Col>
        <h1 className="text-white text-center fs-1">Hello! Welcome to my website</h1>
       <p className="text-white text-center "> Citra Ayu Rahmawati</p>
        </Col>
     </Row>
    </Container>  
 </div>
  );
};

export default HeroComp;
