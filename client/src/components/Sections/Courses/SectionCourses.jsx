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
            En Crefinex ofrecemos cursos diseñados para que niños y jóvenes
            aprendan habilidades financieras clave. Tenemos cursos online y en
            modalidad presencial, con el objetivo de adaptarnos a las
            necesidades y preferencias de cada estudiante.
          </p>
        </div>
      </InViewEffect>
      <Carousel data={props.data} />
      <Button text="Ver todos" />
    </section>
  );
}

export default SectionCourses;
