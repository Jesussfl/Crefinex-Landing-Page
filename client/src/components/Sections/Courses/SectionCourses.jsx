import React from "react";
import Carousel from "../../Carousel/Carousel";
import Button from "../../Buttons/Button";
import InViewEffect from "../../Decorations/InViewEffect/InViewEffect";
import LazyLoad from "react-lazy-load";
import "./SectionCourses.css";

function SectionCourses({ data }) {
   return (
      <section className="section-courses" id="courses">
         <InViewEffect
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}>
            <div className="copys-container">
               <h2>
                  Explora nuestros <span className="red">cursos</span>
               </h2>
               <p className="body-large">
                  En Crefinex ofrecemos cursos diseñados para que niños y jóvenes aprendan habilidades financieras clave. Tenemos cursos
                  online y en modalidad presencial, con el objetivo de adaptarnos a las necesidades y preferencias de cada estudiante.
               </p>
            </div>
         </InViewEffect>
         {/* <div className="courses__cards-container"></div> */}
         <div>{Array.isArray(data) ? <Carousel data={data} /> : <Carousel data={data} />}</div>

         {/* <Carousel data={data} /> */}
         <Button text="Ver todos" />
      </section>
   );
}

export default SectionCourses;
