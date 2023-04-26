import React, { useState } from "react";

function CarouselComponent(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex =
      (currentIndex - 1 + props.numeros.length) % props.numeros.length;
    console.log(currentIndex, newIndex, props.numeros.length);

    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % props.numeros.length;
    console.log(currentIndex, newIndex, props.numeros.length);
    setCurrentIndex(newIndex);
  };

  const currentNumbers = [
    props.numeros[
      (currentIndex - 1 + props.numeros.length) % props.numeros.length
    ],
    props.numeros[currentIndex],
    props.numeros[(currentIndex + 1) % props.numeros.length],
  ];

  return (
    <div>
      <button onClick={handlePrevClick}>Anterior</button>
      <span>{currentNumbers.join(", ")}</span>
      <button onClick={handleNextClick}>Siguiente</button>
    </div>
  );
}

export default CarouselComponent;
