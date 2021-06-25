import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = ({ display, showMenu }) => {
  return (
    <nav className="navbar sticky-top navbar-light" id="nav">
      <Container fluid className="contain">
        <Link to="/" id="initials">
          <span id="f">F</span>
          <span id="q">Q</span>
        </Link>
        <label className="d-flex" htmlFor="check">
          <input
            type="checkbox"
            id="check"
            onClick={() => showMenu(!display)}
          />
          <span id="top-bar"></span>
          <span id="mid-bar"></span>
          <span id="low-bar"></span>
        </label>
      </Container>
    </nav>
  );
};

export default Navbar;
