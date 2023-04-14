import React from "react";
import "./SectionResources.css";
import Card from "../../Card/Card";
import Button from "../../Buttons/Button";
function SectionResources() {
  return (
    <div className="section-resources">
      <div className="copys-resources">
        <h3>Tenemos recursos para tí</h3>
        <p className="body-large">
          Hemos creado una serie de libros y cuentos dirigidos a niños y jóvenes
          para ayudarles a comprender conceptos financieros importantes de
          manera sencilla y divertida.s
        </p>
      </div>
      <div className="horizontal-cards">
        <Card />
        <Card />
      </div>
      <div className="horizontal-cards">
        <Card />
        <Card />
      </div>
      <Button text="Ver todos" />
    </div>
  );
}

export default SectionResources;
