import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="card">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="content">
        <p className="headline">Este es el titulo de un curso</p>
        <p className="description">
          Ofrecemos cursos para niños que les enseñen habilidades financieras
          clave, como presupuestar, ahorrar y administrar el dinero de manera
          responsable.
        </p>
        <div className="tags">
          <div className="tag"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
