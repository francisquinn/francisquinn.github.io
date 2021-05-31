import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title";

const About = () => {
  return (
    <div className="about">
      <Title title="About Me" />
      <br />
      <Container fluid className="contain">
        <Row>
          <Col className="text-center">
            <span>image</span>
          </Col>
          <Col>
            <span>text</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
