import React from "react";
import LazyLoad from "react-lazy-load";
import Card from "../Card/Card";
import "./Carousel.css";
import { useQuery } from "react-query";
import { loadSheetData } from "../../services/googleSheetAPI";

async function getData() {
   await gapi.load("client");

   const coursesData = await loadSheetData("Cursos", "A:J");
   console.log("fetcheando datos de los cursos");

   return coursesData;
}
function Carousel() {
   console.log("Loading Cards...");

   const { isLoading, data } = useQuery("courses", getData);
   if (isLoading || !data) {
      return <p>Cargando</p>;
   }

   return (
      <LazyLoad offset={200} className="carousel">
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
      </LazyLoad>
   );
}

export default Carousel;
