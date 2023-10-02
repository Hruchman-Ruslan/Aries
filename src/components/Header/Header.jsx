import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/program">Program</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
