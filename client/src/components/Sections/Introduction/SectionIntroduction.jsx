import React from "react";
import "./SectionIntroduction.css";
import IntroductionCard from "./IntroductionCard";
function SectionIntroduction() {
   return (
      <section className="section-introduction" style={{ display: "flex" }}>
         <div className="introduction-section-wrapper">
            <IntroductionCard title={true} animationDelay={0.2}>
               <h5>Cursos</h5>
               <p className="headline">
                  Nuestros cursos están diseñados para niños, niñas y
                  adolescentes
               </p>
            </IntroductionCard>
            <span></span>
            <IntroductionCard animationDelay={0.35}>
               <img
                  src="images/webp/rocket-dynamic-color.webp"
                  alt="Exito-Icono"
               />
               <p className="headline">Educación Financiera</p>
               <p className="callout">
                  Permitimos que la persona pueda trazarse su propio camino y
                  aumentar sus posibilidades de éxito.
               </p>
            </IntroductionCard>
            <IntroductionCard animationDelay={0.4}>
               <img
                  src="images/webp/target-dynamic-color.webp"
                  alt="Criptoeconomía-Icono"
               />
               <p className="headline">Criptoeconomía</p>
               <p className="callout">
                  Educamos sobre las nuevas tecnologias financieras.
               </p>
            </IntroductionCard>
            <IntroductionCard animationDelay={0.6}>
               <img
                  src="images/webp/dollar-dollar-color.webp"
                  alt="Emprendimiento-Icono"
               />
               <p className="headline">Emprendimiento</p>
               <p className="callout">
                  Explicamos las distintas formas de emprender a la vez que sus
                  riesgos y beneficios.
               </p>
            </IntroductionCard>
         </div>
      </section>
   );
}

export default SectionIntroduction;
