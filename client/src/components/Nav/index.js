import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Google Books Search
      </a>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link link-light" href="/search">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light" href="/saved">Saved</a>
        </li>
</ul>
    </nav>
  );
}

export default Nav;
