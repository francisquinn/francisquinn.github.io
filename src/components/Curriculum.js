import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";

const Curriculum = () => {
  return (
    <div className="curriculum">
      <Title title="Curriculum Vitae" />
      <br />
      <Container fluid className="contain">
        <Row>
          <Col>
            <span>Curriculum Vitae</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Curriculum;