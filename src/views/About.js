import { Container, Row, Col } from "react-bootstrap";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="about">
      <Title title="About Me" />
      <br />
      <Container fluid className="contain mb-5">
        <Row className="gy-5">
          <Col xl={4} lg={4} md={5} sm={5} xs={12}>
            <img src="/images/about_me.jpg" id="about-image" alt="" />
          </Col>
          <Col xl={8} lg={8} md={7} sm={7} xs={12}>
            <div id="about-text">
              <p>
                My name is Francis Quinn. I'm a 22 year old computing graduate
                from Ireland.
              </p>
              <p>
                I have recently aquired a BSc (Hons) in Computing from Dundalk
                Institute of Technology.
              </p>
              <p>
                Throughout my course, I have worked on varoius different
                projects using a wide range of technologies both individually
                and as part of a group.
              </p>
              <p>
                I gained experience in the mobile cyber security sector as part
                of an ERASMUS Internship programe in Treviso, Italy.
              </p>
              <p>I'm looking forward </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
