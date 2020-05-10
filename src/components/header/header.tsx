import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

const NavLinks = [
  {
    title: "Dashboard",
    to: "/",
    props: {},
  },
  {
    title: "Auth",
    to: "/auth",
    props: {},
  },
  {
    title: "Unknown Page",
    to: "/not-found",
    props: {},
  },
];

const Header = (props: any) => {
  return (
    <header className="app-header">
      <ul aria-label="nav-links">
        {NavLinks.map(({ to, title }, index) => {
          return (
            <li aria-label={"nav-link-to" + to} key={`${to}_${index}`}>
              <Link to={to}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
