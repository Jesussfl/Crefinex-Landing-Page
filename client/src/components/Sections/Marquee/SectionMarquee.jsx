import React, { useRef } from "react";
import ParallaxTextEffect from "../../Animations/ParallaxTextEffect";
import "./SectionMarquee.css";
import { useInView } from "framer-motion";

function SectionMarquee() {
   const ref = useRef(null);
   const isInView = useInView(ref, {
      once: true,
   });
   return (
      <section
         className="marquee-section"
         ref={ref}
         style={{
            width: isInView ? "100%" : "0%",
            overflow: "hidden",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
         }}>
         <ParallaxTextEffect baseVelocity={-1}>
            Creciendo Financiera-mente Exitosos Creciendo Financiera-mente
            Exitosos
         </ParallaxTextEffect>
         <ParallaxTextEffect baseVelocity={1}>
            Educación Financiera Educación Financiera Educación Financiera
         </ParallaxTextEffect>
      </section>
   );
}

export default SectionMarquee;
