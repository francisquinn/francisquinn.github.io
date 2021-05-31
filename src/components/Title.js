import { Container, Row } from "react-bootstrap";

const Title = ({ title }) => {
  return (
    <Container fluid className="contain bg-info">
      <Row>
        <h2>{ title }</h2>
      </Row>
    </Container>
  );
};

export default Title;
