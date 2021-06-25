import { Container, Row, Col } from "react-bootstrap";

const Title = ({ title }) => {
  return (
    <Container fluid className="contain">
      <Row>
        <Col className="my-auto">
          <span id="title-text">{title}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
