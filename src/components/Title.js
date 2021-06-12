import { Container, Row, Col } from "react-bootstrap";

const Title = ({ title }) => {
  return (
    <Container fluid className="contain bg-info">
      <Row>
        <Col className="my-auto">
          <span>{title}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
