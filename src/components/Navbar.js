import { Container, Row, Col } from "react-bootstrap";

const Navbar = ({ display, showMenu }) => {
  return (
    <nav className="navbar sticky-top navbar-light bg-dark">
      <Container fluid className="contain">
        <a href="#home">FQ</a>
        <label className="d-flex" htmlFor="check">
          <input
            type="checkbox"
            id="check"
            onClick={() => showMenu(!display)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </Container>
    </nav>
  );
};

export default Navbar;
