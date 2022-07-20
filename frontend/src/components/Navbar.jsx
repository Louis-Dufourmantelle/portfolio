import React from "react";

function Navbar() {
  return (
    <nav>
      <div>
        <ul id="menu">
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#competence">Compétence</a>
          </li>
          <li>
            <a href="#projet">Projets</a>
          </li>
          <li>
            <a href="#admin">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
