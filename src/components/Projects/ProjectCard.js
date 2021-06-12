import { Container, Row, Col } from "react-bootstrap";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "TacTalk",
      image: "/images/tactalk.PNG",
      links: [{ code: "www.example.com" }, { view: "www.example.com" }],
    },
    {
      id: 2,
      title: "Ephcue",
      image: "/images/tactalk.PNG",
      links: [{ code: "www.example.com" }, { view: "www.example.com" }],
    },
     {
      id: 3,
      title: "Unimeals",
      image: "/images/tactalk.PNG",
      links: [{ code: "www.example.com" }, { view: "www.example.com" }],
    },
  ];
  return (
    <Container fluid className="grid-contain">
      <Row>
        {projects.map((project, index) => (
          <Col xl={3} lg={4} md={6} sm={6} xs={12} className="mb-4" key={index}>
            <div className="project-card">
              <img src={project.image} className="card-img-top" alt="tactalk" />
              <br />
              <br />
              <div className="project-card-body">
                <h5>{project.title}</h5>
                <Row className="text-center">
                  <Col>
                    <button>View Project</button>
                  </Col>
                  <Col>
                    <button>View Code</button>
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
