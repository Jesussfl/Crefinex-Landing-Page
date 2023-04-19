import React, { useEffect, useState } from "react";

import { loadSheetData } from "../../api/googleSheetAPI";

import Card from "../Card/Card";
import "./Carousel.css";
function Carousel() {
  const [cardTitle, setCardTitle] = useState([]);
  const [cardDescription, setCardDescription] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.gapi.load("client", () => {
      loadSheetData("Cursos", "C2:C6").then((loadedData) => {
        console.log(loadedData);
        setCardTitle(loadedData);
        setIsLoading(false);
      });
      loadSheetData("Cursos", "D2:D6").then((loadedData) => {
        console.log(loadedData);
        setCardDescription(loadedData);
        setIsLoading(false);
      });
    });
  }, []);
  return (
    <div className="carousel">
      <div className="cards">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          cardTitle.map((card, index) => (
            <Card
              key={index}
              title={card}
              description={cardDescription[index]}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Carousel;
