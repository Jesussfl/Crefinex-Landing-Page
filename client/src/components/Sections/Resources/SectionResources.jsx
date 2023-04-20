import React, { useState, useEffect } from "react";
import "./SectionResources.css";
import Card from "../../Card/Card";
import Button from "../../Buttons/Button";
import { loadSheetData } from "../../../api/googleSheetAPI";

function SectionResources() {
  const books = [
    "inteligencia-emocional",
    "finanzas-personales",
    "el-dinero",
    "el-ahorro",
    "el-banco",
  ];
  const [cardTitle, setCardTitle] = useState([]);
  const [cardDescription, setCardDescription] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.gapi.load("client", () => {
      loadSheetData("Recursos", "A2:A6").then((loadedData) => {
        console.log(loadedData);
        setCardTitle(loadedData);
        setIsLoading(false);
      });
      loadSheetData("Recursos", "B2:B6").then((loadedData) => {
        console.log(loadedData);
        setCardDescription(loadedData);
        setIsLoading(false);
      });
    });
  }, []);
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
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          cardTitle.map((card, index) => (
            <Card
              key={index}
              title={card}
              description={cardDescription[index]}
              image={`images/${books[index]}.png`}
            />
          ))
        )}
      </div>

      <Button text="Ver todos" />
    </div>
  );
}

export default SectionResources;
