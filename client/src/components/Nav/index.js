import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Google Books Search
      </a>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link link-light" href="/search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-light" href="/saved">Saved</a>
        </li>
</ul>
    </nav>
  );
}

export default Nav;
