import React from "react";
import "./SectionScolarships.css";
import { Button } from "../../index";
function SectionScolarships() {
   return (
      <div className="section__scolarships">
         <div className="scolarships__image-container">
            <img
               src="https://ik.imagekit.io/jeflr/Crefinex-Landing-Page/Scolarships/scolarships.jpg?updatedAt=1683118124385"
               alt="becas_estudiantiles"
               className="scolarships__image"
            />
         </div>
         <div className="scolarships__content-container">
            <h2>Campaña contra el analfabetismo financiero</h2>
            <h5>Otorgamos 90 becas</h5>
            <p>
               En Crefinex creemos que la educación financiera es fundamental
               para el futuro de nuestros niños, niñas y adolescentes. Es por
               eso que ofrecemos becas estudiantiles cada año para aquellos que
               demuestran un interés excepcional en aprender sobre finanzas
               personales.
            </p>
            <Button className="scolarships__button" text="Ver más"></Button>
         </div>
      </div>
   );
}

export default SectionScolarships;
