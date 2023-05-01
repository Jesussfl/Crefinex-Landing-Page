import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
function CarouselButton({ direction, handleClick }) {
   return (
      <motion.div
         whileHover={{ scale: 1 }}
         whileTap={{ scale: 0.95 }}
         className={`carousel-buttons ${direction}-button`}
         onClick={handleClick}>
         {direction == "left" ? (
            <ArrowLeft2 size={28} color="#fff" variant="Bold" />
         ) : (
            <ArrowRight2 size={28} color="#fff" variant="Bold" />
         )}
      </motion.div>
   );
}

export default CarouselButton;
