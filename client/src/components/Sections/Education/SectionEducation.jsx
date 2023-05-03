import React, { useRef } from "react";
import "./SectionEducation.css";
import LazyLoad from "react-lazy-load";
import { useInView } from "framer-motion";
function SectionEducation() {
   const ref = useRef(null);
   const isInView = useInView(ref);
   return (
      <section className="section__education" ref={ref}>
         <LazyLoad
            height={456}
            offset={300}
            className="education__image-container">
            <img
               src="images/webp/kids.webp"
               alt="niños en clase"
               className="education__image"
               style={{
                  transform: isInView ? "translateX(0)" : "translateX(200px)",
                  transition:
                     "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
               }}
            />
         </LazyLoad>
         <div className="education__content">
            <h2>Aspectos de nuestra educación</h2>
            <ul className="education__content-list">
               <li
                  style={{
                     transform: isInView
                        ? "translateX(0)"
                        : "translateX(-200px)",
                     transition:
                        "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s",
                  }}>
                  <p className="headline">
                     Enfoque en la educación financiera temprana
                  </p>
               </li>
               <li
                  style={{
                     transform: isInView
                        ? "translateX(0)"
                        : "translateX(-200px)",
                     transition:
                        "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",
                  }}>
                  <p className="headline">
                     Metodología didáctica y entretenida
                  </p>
               </li>
               <li
                  style={{
                     transform: isInView
                        ? "translateX(0)"
                        : "translateX(-200px)",
                     transition:
                        "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s",
                  }}>
                  <p className="headline">Profesionales expertos en finanzas</p>
               </li>
            </ul>
         </div>
      </section>
   );
}

export default SectionEducation;
