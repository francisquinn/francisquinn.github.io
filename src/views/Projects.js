import { Container, Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import ProjectCard from "../components/Projects/ProjectCard"

const Projects = () => {
  return (
    <div className="projects">
      <Title title="Projects" />
      <br />
      <Container fluid className="contain">
        <Row>
          <Col>
            <ProjectCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
