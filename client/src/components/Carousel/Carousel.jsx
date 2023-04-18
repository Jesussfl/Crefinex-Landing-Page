import React from "react";
import Card from "../Card/Card";
import "./Carousel.css";
function Carousel() {
  return (
    <div className="carousel">
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Carousel;
