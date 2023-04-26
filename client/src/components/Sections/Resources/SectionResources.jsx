import React, { useState, useEffect } from "react";
import "./SectionResources.css";
import Card from "../../Card/Card";
import { CardLarge } from "../../Card/Card";
import Button from "../../Buttons/Button";
import { CarouselFramer } from "../../Carousel/CarouselFramer";
import CarouselComponent from "../../Carousel/Test";
function SectionResources(props) {
  // const books = [
  //   "inteligencia-emocional",
  //   "finanzas-personales",
  //   "el-dinero",
  //   "el-ahorro",
  //   "el-banco",
  // ];
  const books = [
    "book-nobg",
    "book-nobg",
    "book-nobg",
    "book-nobg",
    "book-nobg",
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
      <CarouselFramer data={props.data} />
    </section>
  );
}

export default SectionResources;
