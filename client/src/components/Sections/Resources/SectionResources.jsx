import React from "react";
import "./SectionResources.css";

import Button from "../../Buttons/Button";
import CarouselFramer from "../../Carousel/CarouselFramer";
function SectionResources(props) {
  const bookImages = [
    "/images/webp/inteligencia-emocional.webp",
    "/images/webp/finanzas-personales.webp",
    "/images/webp/el-dinero.webp",
    "/images/webp/el-ahorro.webp",
    "/images/webp/el-banco.webp",
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
