import React from "react";
import "./SectionResources.css";

import Button from "../../Buttons/Button";
import CarouselFramer from "../../Carousel/CarouselFramer";
function SectionResources(props) {
  const bookImages = [
    "/images/inteligencia-emocional.jpg",
    "/images/finanzas-personales.jpg",
    "/images/el-dinero.jpg",
    "/images/el-ahorro.jpg",
    "/images/el-banco.jpg",
  ];

  return (
    <section className="section-resources" id="resources">
      <div className="copys-resources">
        <h2>
          Tenemos recursos <span className="red">para tí</span>
        </h2>
        <p className="body-large">
          Hemos creado una serie de libros y cuentos dirigidos a niños y jóvenes
          para ayudarles a comprender conceptos financieros importantes de
          manera sencilla y divertida.
        </p>
      </div>
      <CarouselFramer data={props.data} images={bookImages} />
    </section>
  );
}

export default SectionResources;
