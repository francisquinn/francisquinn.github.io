import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = ({ display, showMenu }) => {
  return (
    <nav className="navbar sticky-top navbar-light bg-dark">
      <Container fluid className="contain">
        <Link to="/">FQ</Link>
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
