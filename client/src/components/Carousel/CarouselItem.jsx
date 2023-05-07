import React from "react";
import { Card } from "../index";
import { motion } from "framer-motion";
import "./CarouselItem.css";
function CarouselItem({ itemData, custom, identifier }) {
   return (
      <motion.div
         className="carousel-item"
         variants={variants}
         custom={custom}
         initial={identifier !== 1 && "enter"}
         animate={`positionA${identifier}`}
         exit={identifier !== 1 && "exit"}
         transition={{ duration: 0.5 }}
         style={{ gridArea: `A${identifier}` }}
         layout>
         {
            <Card
               data={itemData}
               id={itemData.Id}
               type={itemData.Tipo}
               title={itemData.Titulo}
               description={itemData.Descripcion}
               image={itemData.Imagen}
               price={itemData.Precio}
            />
         }
      </motion.div>
   );
}
let variants = {
   enter: ({ direction, width }) => ({
      x: direction * width,
   }),
   center: { x: 0 },
   exit: ({ direction, width }) => ({
      x: direction * -width,
   }),

   positionA0: {
      x: 0,
      transition: {
         duration: 0.5,
      },
   },
   positionA1: {
      x: 0,
   },
   positionA2: {
      x: 0,
      transition: {
         duration: 0.5,
      },
   },
};

export default CarouselItem;
