import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Menu = ({ display, showMenu }) => {
  return (
    <Container fluid className="text-center" id="menu">
      <Row className="p-2">
        <Col>
          <Link to="/" onClick={() => showMenu(!display)}>
            <span>Home</span>
          </Link>
        </Col>
      </Row>
      <Row className="p-2">
        <Col>
          <Link to="/about" onClick={() => showMenu(!display)}>
            <span>About</span>
          </Link>
        </Col>
      </Row>
      <Row className="p-2">
        <Col>
          <Link to="/projects" onClick={() => showMenu(!display)}>
            <span>Projects</span>
          </Link>
        </Col>
      </Row>
      <Row className="p-2">
        <Col>
          <Link to="/cirriculum" onClick={() => showMenu(!display)}>
            <span>Cirriculum Vitae</span>
          </Link>
        </Col>
      </Row>
      <Row className="p-2">
        <Col>
          <Link to="/contact" onClick={() => showMenu(!display)}>
            <span>Contact</span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
