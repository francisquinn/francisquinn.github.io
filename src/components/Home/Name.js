import { Container, Row } from "react-bootstrap";

const Name = () => {
  return (
    <Container className="grid-contain" fluid>
      <Row className="grid-row">
        <span id="first-name">FRANCIS</span>
      </Row>
      <Row id="last-name">
        <span><b>QUINN</b></span>
      </Row>
    </Container>
  );
};

export default Name;
