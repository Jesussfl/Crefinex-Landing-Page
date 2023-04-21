import React, { useState, useEffect } from "react";
import "./SectionResources.css";
import Card from "../../Card/Card";
import Button from "../../Buttons/Button";

function SectionResources(props) {
  const books = [
    "inteligencia-emocional",
    "finanzas-personales",
    "el-dinero",
    "el-ahorro",
    "el-banco",
  ];

  return (
    <div className="section-resources">
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
        {props.data.map((card, index) => (
          <Card
            key={index}
            title={card.Titulo}
            description={card.Descripcion}
            image={`images/${books[index]}.jpg`}
          />
        ))}
      </div>

      <Button text="Ver todos" />
    </div>
  );
}

export default SectionResources;
