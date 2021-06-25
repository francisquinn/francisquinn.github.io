import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  useEffect(() => {
    const date = new Date();
    document.getElementById("year").innerHTML = date.getFullYear();
  });

  return (
    <Container className="footer" fluid>
      <Row className="text-center">
        <Col>
          <div>
            <span style={{ fontWeight: 100, color: "#3d405b" }}>FRANCIS</span>{" "}
            <b style={{ color: "#e07a5f" }}>QUINN</b> -{" "}
            <span style={{ color: "#3d405b" }} id="year"></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
