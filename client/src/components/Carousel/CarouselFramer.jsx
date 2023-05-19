import React, { useState, memo } from "react";
import useMeasure from "react-use-measure";

//Styles
import "./CarouselFramer.css";
import { AnimatePresence } from "framer-motion";

//Components
import CarouselButton from "./CarouselButton";
import CarouselItem from "./CarouselItem";
import { useQuery } from "react-query";
import { getData } from "../../services/googleSheetAPI";

const CarouselFramer = memo(function CarouselFramer() {
   const { isLoading, data } = useQuery("books", () => getData("Libros", "A:H"));
   const [currentItem, setIndex] = useState(1);
   const [ref, { width }] = useMeasure();
   const [tuple, setTuple] = useState([null, currentItem]); // [prev, current]

   const prev = tuple[0];
   let direction = 0;

   if (tuple[1] !== currentItem) {
      setTuple([tuple[1], currentItem]);
   }
   if (prev !== null && !isLoading) {
      const dist = (currentItem - prev + data.length) % data.length;
      if (dist <= data.length / 2) {
         direction = 1;
      } else {
         direction = -1;
      }
   }

   const getPrevIndex = () => {
      return (currentItem - 1 + data.length) % data.length;
   };
   const getNextIndex = () => {
      return (currentItem + 1) % data.length;
   };
   const prevClick = () => {
      setIndex(getPrevIndex());
   };
   const nextClick = () => {
      setIndex(getNextIndex());
   };
   if (isLoading || !data) {
      return <p>Cargando</p>;
   }
   const displayedElements = [data[getPrevIndex()], data[currentItem], data[getNextIndex()]];
   return (
      <div className="carousel-section">
         <div className="carousel-wrapper">
            <CarouselButton direction={"left"} handleClick={prevClick} />
            <CarouselButton direction={"right"} handleClick={nextClick} />
            <div ref={ref} className="carousel-container">
               <AnimatePresence custom={{ direction, width }}>
                  {displayedElements.map((item, index) => (
                     <CarouselItem key={item.Id} type={item.Tipo} itemData={item} identifier={index} custom={{ direction, width }} />
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
});

export default CarouselFramer;
