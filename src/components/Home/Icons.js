import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { useEffect } from "react";

const Icons = () => {

  useEffect(() => {
    gsap.set(".icon", {autoAlpha:1});
    gsap.from(".icon", {opacity: 0, y: 100, duration: 1});
  }, [] );

  const social_icons = [
    { id: 1, icon: mdiGithub, link: "https://github.com/francisquinn" },
    {
      id: 2,
      icon: mdiLinkedin,
      link: "https://www.linkedin.com/in/francis-quinn-501046161/",
    },
    { id: 3, icon: mdiEmailOutline, link: "mailto: francisquinnn@gmail.com" },
  ];
  return (
    <Container className="grid-contain">
      <Row className="text-center">
        {social_icons.map((icon, index) => (
          <Col className="icon-group" key={index}>
            <a href={icon.link} target="_blank" rel="noreferrer">
              <Icon className="icon" path={icon.icon} />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Icons;
