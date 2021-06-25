import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="vertical-center vertical-center-menu">
      <Container fluid className="contain">
        <Row className="text-center mb-4">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <span id="page-not-found">Page Not Found :(</span>
          </Col>
        </Row>
        <Row className="mb-5 text-center">
          <Col>
            <Link to="/">
              <button className="red-btn">
                <Row>
                  <Col>
                    <span className="align-middle submit-txt">Return Home</span>
                  </Col>
                </Row>
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
