import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { mdiEye } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiCodeTags } from "@mdi/js";

const ProjectCard = () => {
  useEffect(() => {
    gsap.set(".project-card", { autoAlpha: 1 });
    gsap.from(".project-card", { opacity: 0, y: 100, duration: 0.7 });
  }, []);

  const [loading, setLoading] = useState(true);

  const projects = [
    {
      id: 0,
      title: "TacTalk",
      image: "/images/tactalk.PNG",
      links: [
        { view: "https://mahara.dkit.ie/view/view.php?t=Lkx4G9U2lmaWHh38qgSK" },
        { code: "https://github.com/francisquinn/TacTalk" },
      ],
    },
    {
      id: 1,
      title: "Ephcue",
      image: "/images/ephcue.png",
      links: [
        { view: "https://www.ephcue.com" },
        { code: "https://github.com/francisquinn/ephcue" },
      ],
    },
    {
      id: 2,
      title: "Unimeals",
      image: "/images/unimeals.png",
      links: [
        { view: "https://mahara.dkit.ie/view/view.php?t=8dRDUPWzAbFfXCSh7n13" },
        { code: "https://github.com/lyervo/RojakProject" },
      ],
    },
  ];
  return (
    <Container fluid className="grid-contain">
      <Row>
        {projects.map((project, index) => (
          <Col xl={3} lg={4} md={6} sm={6} xs={12} className="mb-4" key={index}>
            <div className="project-card">
              {loading && 
               <div className="spinner-border text-danger center-spinner" role="status">
                 <span className="sr-only"></span>
               </div>
              }
              <img src={project.image} className="card-img-top" style={{ height: "auto" }} alt="project" width="336" height="116" onLoad={() => setLoading(false)} />
              <br />
              <br />
              <div className="project-card-body">
                <br />
                <Row className="text-center">
                  <Col>
                    <a
                      href={project.links[0].view}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="green-btn">
                        <Row>
                          <Col className="my-auto">
                            <Icon
                              className="align-middle submit-icon"
                              path={mdiEye}
                            ></Icon>
                            <span className="ms-2 align-middle submit-txt">
                              Project
                            </span>
                          </Col>
                        </Row>
                      </button>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href={project.links[1].code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="navy-btn">
                        <Row>
                          <Col className="my-auto">
                            <Icon
                              className="align-middle submit-icon"
                              path={mdiCodeTags}
                            ></Icon>
                            <span className="ms-2 align-middle submit-txt">
                              Code
                            </span>
                          </Col>
                        </Row>
                      </button>
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectCard;
