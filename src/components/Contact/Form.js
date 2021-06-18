import { Container, Row, Col } from "react-bootstrap";
import { mdiSendCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import gsap from "gsap";
import { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    gsap.set(".contact-form", { autoAlpha: 1 });
    gsap.fromTo(".contact-form", { x: -1000 }, { x: 0, duration: 0.7 });
  }, []);

  return (
    <form
      className="contact-form"
      action="https://formspree.io/f/xpzkdjrv"
      method="POST"
    >
      <Container fluid className="grid-contain">
        <Row className="gy-4 mb-3">
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <input
              type="text"
              name="first"
              required
              className="form-control"
              placeholder="First Name"
            />
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <input
              type="text"
              name="last"
              required
              className="form-control"
              placeholder="Surname"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <input
              type="email"
              className="form-control"
              name="_replyto"
              required
              placeholder="Email"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <textarea
              type="text"
              name="message"
              required
              className="form-control"
              placeholder="Message"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <button>
              <input type="submit" value="Send" />
              <Icon path={mdiSendCircleOutline}></Icon>
            </button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default Form;
