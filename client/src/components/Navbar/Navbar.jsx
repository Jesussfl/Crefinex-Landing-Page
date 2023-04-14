import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="left-side">
        <img src="logo-crefinex.svg"></img>
      </div>
      <div className="right-side">
        <ul>
          <li>Inicio</li>
          <li>Nuestros Cursos</li>
          <li>¿Quiénes somos?</li>
          <li>Recursos</li>
          <li>Ubicación</li>
        </ul>
        <div className="actions">
          <button>Contáctanos</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
