import { Container, Row } from "react-bootstrap";

const Name = () => {
  return (
    <Container className="grid-contain" fluid>
      <Row>
        <span id="first-name">FRANCIS</span>
      </Row>
      <Row>
        <span id="last-name">
          <b>QUINN</b>
        </span>
      </Row>
    </Container>
  );
};

export default Name;
