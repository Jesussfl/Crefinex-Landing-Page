import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function IntroductionCard({ title, animationDelay = 0.5, children }) {
   const ref = useRef(null);
   const isInView = useInView(ref, {
      once: true,
   });
   return (
      <motion.div
         ref={ref}
         className={title ? "info title" : "info"}
         whileHover={{
            scale: 1.09,
         }}
         whileTap={{ scale: 0.95 }}
         style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "scale(1)" : "scale(0)",
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${animationDelay}s`,
         }}>
         {children}
      </motion.div>
   );
}

export default IntroductionCard;
