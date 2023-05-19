import React from "react";
import LazyLoad from "react-lazy-load";
import Card from "../Card/Card";
import "./CoursesContainer.css";
import { useCoursesQuery } from "./Hooks/useCoursesQuery";

function CoursesContainer() {
   const { data, isLoading } = useCoursesQuery();
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

export default CoursesContainer;
