import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";

const Projects = () => {
  return (
    <div className="projects">
      <Title title="Projects" />
      <br />
      <Container fluid className="contain">
        <Row>
          <Col>
            <span>projects</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
