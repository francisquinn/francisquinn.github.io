import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";

const About = () => {
  return (
    <Container fluid className="about contain bg-info">
      <Row className="text-center">
        <Col lg={6}>
          <Title title="About Page" />
        </Col>
        <Col lg={6}>
          <Title title="About Page" />
        </Col>
        <Col lg={12}>
          <Title title="About Page" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
