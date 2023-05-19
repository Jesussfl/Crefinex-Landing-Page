import { useState } from "react"; // or the appropriate import

export function useCarouselState(initialIndex, data) {
   const [currentItem, setIndex] = useState(initialIndex);
   const [tuple, setTuple] = useState([null, currentItem]);

   const getPrevIndex = () => {
      return (currentItem - 1 + (data?.length || 0)) % (data?.length || 1);
   };

   const getNextIndex = () => {
      return (currentItem + 1) % (data?.length || 1);
   };

   const prevClick = () => {
      setIndex(getPrevIndex());
   };

   const nextClick = () => {
      setIndex(getNextIndex());
   };

   const prev = tuple[0];
   let direction = 0;

   if (tuple[1] !== currentItem) {
      setTuple([tuple[1], currentItem]);
   }

   if (prev !== null && data) {
      const dist = (currentItem - prev + (data?.length || 0)) % (data?.length || 1);
      if (dist <= (data?.length || 0) / 2) {
         direction = 1;
      } else {
         direction = -1;
      }
   }

   const displayedElements = [data?.[getPrevIndex()], data?.[currentItem], data?.[getNextIndex()]];

   return {
      currentItem,
      prevClick,
      nextClick,
      displayedElements,
      direction,
   };
}
