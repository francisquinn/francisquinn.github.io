import { Container, Row } from "react-bootstrap";

const Name = () => {
  return (
    <Container className="bg-info grid-contain" fluid>
      <Row className="grid-row">
          <span id="first-name">FRANCIS</span>
          <span id="last-name">QUINN</span>
      </Row>
    
    </Container>
  );
};

export default Name;
