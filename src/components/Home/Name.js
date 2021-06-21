import { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "typed.js";

const Name = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["FRANCIS"],
      typeSpeed: 100
    };

    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <Container className="grid-contain" fluid>
      <Row>
        <Col>
          <span ref={el} id="first-name"></span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span id="last-name">
            <b>QUINN</b>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Name;
