import React, { memo } from "react";
import useMeasure from "react-use-measure";

//Styles
import "./CarouselFramer.css";

//Components
import CarouselButton from "./CarouselButton";
import CarouselItem from "./CarouselItem";
import { AnimatePresence } from "framer-motion";
import { useBooksQuery } from "./Hooks/useBooksQuery";
import { useCarouselState } from "./Hooks/useCarouselState";

const CarouselFramer = memo(function CarouselFramer() {
   const { data, isLoading } = useBooksQuery();
   const [ref, { width }] = useMeasure();
   const { prevClick, nextClick, displayedElements, direction } = useCarouselState(1, data);

   if (isLoading || !data) {
      return <p>Cargando</p>;
   }
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
