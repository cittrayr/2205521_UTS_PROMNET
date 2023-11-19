import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.jpg";
import projImg4 from "../assets/img/project4.jpg";
import projImg5 from "../assets/img/project5.jpg";
import projImg6 from "../assets/img/project6.jpg";
import projImg7 from "../assets/img/project7.jpg";
import projImg8 from "../assets/img/project8.jpg";
import projImg9 from "../assets/img/project9.jpg";
import projImg10 from "../assets/img/project10.jpg";
import projImg11 from "../assets/img/project11.jpg";
import projImg12 from "../assets/img/project12.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "KEMAKOM",
      description: "Terapotentia 2022",
      imgUrl : projImg1,
    },
    {
      title: "My Best Friends",
      description: "CIELLSON",
      imgUrl: projImg2,
    },
    {
      title: "KEMAKOM",
      description: "Avengers 2022",
      imgUrl: projImg3,
    },
    {
      title: "My Hobby",
      description: "Swimming",
      imgUrl: projImg4,
    },
    {
      title: "Selfie",
      description: "My Self",
      imgUrl: projImg5,
    },
    {
      title: "My Favorit Place",
      description: "Spring water",
      imgUrl: projImg6,
    },
    {
      title: "My Favorit Person",
      description: "Rp",
      imgUrl: projImg7,
    },
    {
      title: "My Family",
      description: "Surgaku & Duniaku",
      imgUrl: projImg8,
    },
    {
      title: "My Best Friend since 2017",
      description: "queenpeachy",
      imgUrl: projImg9,
    },
    {
      title: "My Cat",
      description: "Ciki",
      imgUrl: projImg10,
    },
    {
      title: "My Self",
      description: "Citra Ayu Rahmawati",
      imgUrl: projImg11,
    },
    {
      title: "My Cat",
      description: "Ciko",
      imgUrl : projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Self-Portrait & Personal Profile leading to Communication"</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Get In Touch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About Me</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>"Communication is the key that unlocks the door to understanding. Get in touch, stay connected."</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I would like to introduce my self, my full name is Citra Ayu Rahmawati and you can call me Citra. I live in Subang. I was born in Subang, exactly 12th of february 2002. a third-semester student in the Computer Science Education program, class A of 2022, at the Universitas Pendidikan Indonesia (UPI).</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt={colorSharp2}></img>
    </section>
  )
}