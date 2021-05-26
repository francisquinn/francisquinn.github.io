import { Container, Row, Col } from "react-bootstrap";
import Name from "./Name";
import Icons from "./Icons"
import Links from "./Links";

const Home = () => {
  return (
    <Container fluid className="contain bg-light">
      <Row>
        <Col xl={7} lg={7} md={7} sm={7} xs={12} >
          <Name />
        </Col>
        <Col className="bg-dark" xl={5} lg={5} md={5} sm={5} xs={12}>
          <Icons />
          <br />
          <Links />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
