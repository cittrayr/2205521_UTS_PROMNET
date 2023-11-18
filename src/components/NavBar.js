import {useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from '../assets/img/logo.jpeg';
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.jpg';
import navIcon3 from '../assets/img/nav-icon3.jpg';

export const NavBar = () => {
    const [activeLink, setActivelink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () = {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
        }, [])

    const onUpdateActiveLink = (value) => {
        setActivelink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.className="me-auto">
                        <nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'nabar-link'} onClick={() => onUpdateActivelink('home')}></nav.Link>
                        <nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'nabar-link'} onClick={() => onUpdateActivelink('skills')}></nav.Link>
                        <nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'nabar-link'} onClick={() => onUpdateActivelink('projects')}></nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console,console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </NavBar>
    )
}