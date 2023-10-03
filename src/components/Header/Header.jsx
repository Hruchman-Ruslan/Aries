import { NavLink } from "react-router-dom";
import styled from "../Header/Header.module.css";

export const Header = () => {
  return (
    <header className={styled.header}>
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
