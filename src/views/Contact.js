import { Container, Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import Icons from "../components/Home/Icons";
import Form from "../components/Contact/Form";

const Contact = () => {
  return (
    <div className="contact">
      <Title title="Contact" />
      <br />
      <br />
      <Container fluid className="contain">
        <Row>
          <Col xl={5} lg={6} md={12} sm={12} xs={12}>
            <Form />
          </Col>
          <Col xl={7} lg={6} md={12} sm={12} xs={12}>
            <Icons />
            <br />
            <br />
            {/* <Location /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
