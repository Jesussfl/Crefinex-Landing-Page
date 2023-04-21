import React, { useEffect, useState } from "react";
import Carousel from "../../Carousel/Carousel";
import Button from "../../Buttons/Button";
import InViewEffect from "../../Decorations/InViewEffect/InViewEffect";

import "./SectionCourses.css";

function SectionCourses(props) {
  return (
    <section className="section-courses" id="courses">
      <InViewEffect
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
      </InViewEffect>
      <Carousel data={props.data} />
      <Button text="Ver todos" />
    </section>
  );
}

export default SectionCourses;
