import React, { useEffect, useState } from "react";

import Card from "../Card/Card";
import "./Carousel.css";
function Carousel(props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="carousel">
      <div className="cards">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          props.data.map((card, index) => (
            <Card
              key={index}
              title={card.Titulo}
              description={card.Descripcion}
              image={props.images[index]}
              price={card.Precio}
              data={card}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Carousel;
