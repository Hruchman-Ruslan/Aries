import { NavLink } from "react-router-dom";
import styled from "../Header/Header.module.css";

export const Header = () => {
  return (
    <header className={styled.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/program">program</NavLink>
          </li>
          <li>
            <NavLink to="/funding">funding</NavLink>
          </li>
          <li>
            <NavLink to="/">aries</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">jobs</NavLink>
          </li>
          {/* <li>
            <NavLink to="/menu">menu</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
