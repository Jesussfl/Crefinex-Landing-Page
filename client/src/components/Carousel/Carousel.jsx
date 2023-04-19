import React, { useEffect, useState } from "react";

import { loadSheetData } from "../../api/googleSheetAPI";

import Card from "../Card/Card";
import "./Carousel.css";
function Carousel() {
  const [cardDescription, setCardDescription] = useState([]);
  useEffect(() => {
    window.gapi.load("client", () => {
      loadSheetData("B1:B9").then((loadedData) => {
        console.log(loadedData);
        setCardDescription(loadedData);
      });
    });
  }, []);
  return (
    <div className="carousel">
      <div className="cards">
        <Card title={cardDescription[3][0]} />
        <Card title={cardDescription[5][0]} />
        <Card title={cardDescription[7][0]} />
      </div>
    </div>
  );
}

export default Carousel;
