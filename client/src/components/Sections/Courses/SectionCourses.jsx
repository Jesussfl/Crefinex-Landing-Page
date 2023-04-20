import React, { useEffect, useState } from "react";
import Carousel from "../../Carousel/Carousel";
import Button from "../../Buttons/Button";
import InViewEffect from "../../Decorations/InViewEffect/InViewEffect";

import "./SectionCourses.css";

function SectionCourses() {
  return (
    <div className="section-courses">
      <InViewEffect>
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
      </InViewEffect>
      <Carousel />
      <Button text="Ver todos" />
    </div>
  );
}

export default SectionCourses;
