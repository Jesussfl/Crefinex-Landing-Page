import React from "react";
import "./Carousel.css";
import Card from "../Card/Card";
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
