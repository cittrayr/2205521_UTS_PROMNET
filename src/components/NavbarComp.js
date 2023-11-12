import React, {useState, useEffect} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComp = () => {
    const [ChangeColor, setChangeColor] = useState(false);

    const ChangeBacgroundColor = () => {
        if (window.scrollY > 680) {
            setChangeColor(true);
        }else {
            setChangeColor(false);
        }
    };
    
    useEffect(() => {
        ChangeBacgroundColor();

        window.addEventListener("scroll", ChangeBacgroundColor);
    });

    return (
     <div className = "sticky-top">
        <Navbar variant = "dark" expand = "lg" className={ChangeColor ? "color-active" : ""}>
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-4">Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link href="#Home">Home
                        </Nav.Link>
                        <Nav.Link href="#link">
                        About
                        </Nav.Link>
                        <Nav.Link href="#Clink">
                        Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     </div>
    );
};

export default NavbarComp;