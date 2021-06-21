import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mdiInformationVariant } from "@mdi/js";
import { mdiFileDocumentOutline } from "@mdi/js";
import { mdiHammerWrench } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import Icon from "@mdi/react";

const Links = () => {
  const page_links = [
    { id: 1, icon: mdiInformationVariant, text: "About", link: "/about" },
    { id: 2, icon: mdiHammerWrench, text: "Projects", link: "/projects" },
    { id: 3, icon: mdiFileDocumentOutline, text: "CV", link: "/curriculum" },
    { id: 4, icon: mdiEmailOutline, text: "Contact", link: "/contact" },
  ];

  return (
    <Container fluid className="links grid-contain">
      <Row className="link-row">
        {page_links.map((link, index) => (
          <Col xl={6} lg={6} md={12} sm={12} xs={6} key={index}>
            <Link id="link-tag" to={link.link}>
              <div id="link" className="mt-2 mb-2">
                <Row>
                  <Col className="my-auto" xl={2} lg={3} md={2} sm={3} xs={4}>
                    <Icon className="link-icon" path={link.icon} />
                  </Col>
                  <Col className="my-auto" xl={10} lg={9} md={10} sm={9} xs={8}>
                    <span id="link-text">{link.text}</span>
                  </Col>
                </Row>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Links;
