import { useRef } from "react";
import { useInView } from "framer-motion";

function InViewEffect({ children }) {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   return (
      <div
         ref={ref}
         style={{
            display: "flex",
            justifyContent: "center",
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
         }}>
         {children}
      </div>
   );
}
export default InViewEffect;
