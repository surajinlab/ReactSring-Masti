import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Student ERP</h2>

      <ul>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Students
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;