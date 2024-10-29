import React from "react";
import clases from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={clases.header}>
      <nav>
        <ul className={clases.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? clases.active : null)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? clases.active : null)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
