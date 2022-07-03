import { NavLink } from "react-router-dom";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          CredAdda
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to={"/"}>
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/dashboard"}>
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/login"}>
                Sign in
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/signup"}>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;