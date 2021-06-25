import { Container, Row, Col } from "react-bootstrap";

const Location = () => {
  return (
    <Container fluid className="grid-contain">
      <Row>
        <Col>
          <iframe
            id="map"
            title="Location"
            width="100%"
            height="300"
            loading="lazy"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJKwQ9SuAcXkgRcBUyl6nHAAo&key=${process.env.REACT_APP_API_KEY}&zoom=15`}
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
