import React from "react";

function Navbar() {
  return (
    <nav>
      <div>
        <ul id="menu">
          <li>
            <a href="#profil">Profile</a>
          </li>
          <li>
            <a href="#skills">Compétence</a>
          </li>
          <li>
            <a href="#projets">Projets</a>
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
