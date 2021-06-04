import { Container, Row, Col } from "react-bootstrap";

const Title = ({ title }) => {
  return (
    <Container fluid className="contain bg-info">
      <Row>
        <Col className="my-auto">
          <h2>{title}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
