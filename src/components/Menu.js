import { Link } from "react-router-dom";

const Menu = ({ display, showMenu }) => {
  return (
    <div className="menu">
      <Link to="/" onClick={() => showMenu(!display)}>
        <span>Home</span>
      </Link>

      <Link to="/about" onClick={() => showMenu(!display)}>
        <span>About</span>
      </Link>
    </div>
  );
};

export default Menu;
