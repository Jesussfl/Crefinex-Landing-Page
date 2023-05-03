import React from "react";
import "./SectionResources.css";

import Button from "../../Buttons/Button";
import CarouselFramer from "../../Carousel/CarouselFramer";
function SectionResources(props) {
   const bookImages = [
      "/images/webp/inteligencia-emocional.webp",
      "/images/webp/finanzas-personales.webp",
      "/images/webp/el-dinero.webp",
      "/images/webp/el-ahorro.webp",
      "/images/webp/el-banco.webp",
   ];

   return (
      <section className="section-resources" id="resources">
         <div
            className="resources__banner"
            style={{
               height: "456px",
               width: "100%",
               backgroundImage:
                  "url('https://ik.imagekit.io/jeflr/Crefinex-Landing-Page/Covers/books-background.jpg?updatedAt=1682943003787')",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}>
            <h2
               style={{
                  color: "white",
                  textShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
               }}>
               ¡Contamos con libros educativos!
            </h2>
         </div>
         <div className="copys-resources">
            <p className="body-large">
               Hemos creado una serie de libros y cuentos dirigidos a niños y
               jóvenes para ayudarles a comprender conceptos financieros
               importantes de manera sencilla y divertida.
            </p>
         </div>
         <CarouselFramer data={props.data} images={bookImages} />
      </section>
   );
}

export default SectionResources;
