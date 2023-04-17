import React, { useState } from "react";
import "./Navbar.css";
import NavItem from "../NavItem/NavItem";
import { HambergerMenu } from "iconsax-react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="center">
      <div className="left-side ">
        <img
          src={`${showMenu ? "logo-crefinex-white.svg" : "logo-crefinex.svg"}`}
        ></img>
      </div>
      <div className={`right-side ${showMenu ? "opened" : ""}`}>
        <div className={`links ${showMenu ? "links-menu-opened" : ""}`}>
          <NavItem text="Inicio"></NavItem>
          <NavItem text="Nuestros Cursos"></NavItem>
          <NavItem text="¿Quiénes somos?"></NavItem>
          <NavItem text="Recursos"></NavItem>
          <NavItem text="Ubicación"></NavItem>
        </div>
        <div className="actions">
          <button>Contáctanos</button>
        </div>
      </div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={`menu ${showMenu ? "opened-elements" : ""}`}
      >
        <HambergerMenu variant="Bold" size={36} />
      </div>
    </nav>
  );
}

export default Navbar;
