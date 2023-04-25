import React, { useState, useEffect } from "react";
import "./SectionResources.css";
import Card from "../../Card/Card";
import { CardLarge } from "../../Card/Card";
import Button from "../../Buttons/Button";
import { CarouselFramer } from "../../Carousel/CarouselFramer";
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

      <div className="horizontal-cards">
        {/* {props.data.map((card, index) => (
          <CardLarge
            key={index}
            title={card.Titulo}
            description={card.Descripcion}
            image={`images/${books[index]}.png`}
          />
        ))} */}
        <CarouselFramer
          images={[
            "https://source.unsplash.com/random/600x800?red",
            "https://source.unsplash.com/random/600x800?orange",
            "https://source.unsplash.com/random/600x800?yellow",
            "https://source.unsplash.com/random/600x800?green",
            "https://source.unsplash.com/random/600x800?blue",
            "https://source.unsplash.com/random/600x800?indigo",
            "https://source.unsplash.com/random/600x800?violet",
          ]}
        />
      </div>

      <Button text="Ver todos" />
    </section>
  );
}

export default SectionResources;
