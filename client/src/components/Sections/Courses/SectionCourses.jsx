import React from "react";
import "./SectionCourses.css";
import Carousel from "../../Carousel/Carousel";
import Button from "../../Buttons/Button";

function SectionCourses() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: "56px, 88px",
        gap: "48px",
        margin: "88px 0",
      }}
    >
      <div className="copys-container">
        <h2>
          Explora nuestros <span className="red">cursos</span>
        </h2>
        <p className="body-large">
          Ofrecemos cursos para niños que les enseñen habilidades financieras
          clave, como presupuestar, ahorrar y administrar el dinero de manera
          responsable.
        </p>
      </div>
      <Carousel />
      <Button text="Ver todos" />
    </div>
  );
}

export default SectionCourses;
