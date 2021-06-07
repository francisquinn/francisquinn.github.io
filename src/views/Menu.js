import { Link } from "react-router-dom";
import { mdiHome } from '@mdi/js'; 
import { mdiInformationVariant } from "@mdi/js";
import { mdiFileDocumentOutline } from "@mdi/js";
import { mdiHammerWrench } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "@mdi/react";

const Menu = ({ display, showMenu }) => {
  const links = [
    { id: 1, icon: mdiHome, text: "Home", link: "/" },
    { id: 2, icon: mdiInformationVariant, text: "About", link: "/about" },
    { id: 3, icon: mdiHammerWrench, text: "Projects", link: "/projects" },
    {
      id: 4,
      icon: mdiFileDocumentOutline,
      text: "Curriculum Vitae",
      link: "/curriculum",
    },
    { id: 5, icon: mdiEmailOutline, text: "Contact", link: "/contact" },
  ];
  return (
    <Container fluid id="menu">
      <div className="vertical-center">
        <Container fluid className="bg-warning">
          {links.map((link, index) => (
            <Row className="p-2 bg-dark" key={index} >
              <Col className="bg-success align-self-center">
                <Link
                  id="link-text"
                  to={link.link}
                  className="d-flex justify-content-center"
                  onClick={() => showMenu(!display)}
                >
                  <Row className="bg-info menu-items">
                    <Col className="my-auto" xl={2} lg={3} md={3} sm={3} xs={2}>
                      <Icon className="icon-sm" path={link.icon} />
                    </Col>
                    <Col className="my-auto" xl={10} lg={9} md={8} sm={9} xs={10}>
                      <span>{link.text}</span>
                    </Col>
                  </Row>
                </Link>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </Container>
  );
};

export default Menu;
