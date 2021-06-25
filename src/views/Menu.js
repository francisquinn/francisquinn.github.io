import { Link } from "react-router-dom";
import { mdiHome } from "@mdi/js";
import { mdiInformationVariant } from "@mdi/js";
import { mdiFileDocumentOutline } from "@mdi/js";
import { mdiHammerWrench } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "@mdi/react";
import gsap from "gsap";
import { useEffect } from "react";

const Menu = ({ display, showMenu }) => {
  const links = [
    { id: 1, icon: mdiHome, text: "Home", link: "/", url: false },
    {
      id: 2,
      icon: mdiInformationVariant,
      text: "About",
      link: "/about",
      url: false,
    },
    {
      id: 3,
      icon: mdiHammerWrench,
      text: "Projects",
      link: "/projects",
      url: false,
    },
    {
      id: 4,
      icon: mdiFileDocumentOutline,
      text: "CV",
      link: "http://localhost:3000/francisquinn_CV.pdf",
      url: true,
    },
    {
      id: 5,
      icon: mdiEmailOutline,
      text: "Contact",
      link: "/contact",
      url: false,
    },
  ];

  useEffect(() => {
    gsap.fromTo("#menu", { y: -1000 }, { y: 0, duration: 0.6 });
  }, []);

  return (
    <Container fluid id="menu">
      <div className="vertical-center vertical-center-menu">
        <Container fluid>
          {links.map((link, index) => (
            <Row className="p-2 mb-3" key={index}>
              <Col className="align-self-center">
                {link.url ? (
                  <a
                    id="link-tag"
                    className="d-flex justify-content-center"
                    href={link.link}
                  >
                    <Row className="menu-items">
                      <Col
                        className="text-center my-auto"
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={4}
                      >
                        <Icon className="icon-menu" path={link.icon} />
                      </Col>
                      <Col
                        className="my-auto "
                        xl={8}
                        lg={8}
                        md={8}
                        sm={8}
                        xs={8}
                      >
                        <span id="menu-text">{link.text}</span>
                      </Col>
                    </Row>
                  </a>
                ) : (
                  <Link
                    id="link-tag"
                    to={link.link}
                    className="d-flex justify-content-center"
                    onClick={() => showMenu(!display)}
                  >
                    <Row className="menu-items">
                      <Col
                        className="text-center my-auto"
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={4}
                      >
                        <Icon className="icon-menu" path={link.icon} />
                      </Col>
                      <Col
                        className="my-auto "
                        xl={8}
                        lg={8}
                        md={8}
                        sm={8}
                        xs={8}
                      >
                        <span id="menu-text">{link.text}</span>
                      </Col>
                    </Row>
                  </Link>
                )}
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </Container>
  );
};

export default Menu;
