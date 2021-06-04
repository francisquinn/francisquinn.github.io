import Key from "../../key.json";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Location = () => {
  useEffect(() => {
    document.getElementById("map").src =
      "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJKwQ9SuAcXkgRcBUyl6nHAAo&key=" +
      Key.API_KEY +
      "&zoom=15";
  });
  return (
    <Container fluid className="contain">
      <Row>
        <Col>
          <iframe
            id="map"
            title="Location"
            width="100%"
            height="250"
            loading="lazy"
            frameBorder="0"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
