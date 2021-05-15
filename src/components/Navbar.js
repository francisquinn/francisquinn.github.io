const Navbar = ({ display, showMenu }) => {
  return (
    <nav id="navbar">
      <ul>
        <li id="initials">
          <a href="#home">FQ</a>
        </li>
        <li id="hamburger-icon" >
          <label htmlFor="check" >
            <input
              type="checkbox"
              id="check"
              onClick={() => showMenu(!display)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
