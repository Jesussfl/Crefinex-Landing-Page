import React from "react";

import Card from "../Card/Card";
import "./Carousel.css";
function Carousel({ data }) {
   console.log(data);
   return (
      <div className="carousel">
         <div className="cards">
            {data.map((card, index) => (
               <Card
                  key={index}
                  id={card.Id}
                  type={card.Tipo}
                  title={card.Titulo}
                  description={card.Descripcion}
                  image={card.Imagen}
                  price={card.Precio}
                  link={card.LinkDeCompra}
                  data={card}
               />
            ))}
         </div>
      </div>
   );
}

export default Carousel;
