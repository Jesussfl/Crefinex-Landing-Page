import React from "react";
import "./SectionSubscribe.css";
import Button from "../../Buttons/Button";
import TextField from "../../Textfields/TextField";
import { ArrowCircleRight, Sms } from "iconsax-react";

function Subscribe() {
   return (
      <div className="section-subscribe">
         <div className="copys-subscribe">
            <h2>Mejoremos el futuro financiero de tu hijo.</h2>
            <p className="headline">Adquiere nuestra guía gratuita</p>
            <div className="actions">
               <TextField
                  type="email"
                  placeholder="Correo Electronico"
                  leftIcon={<Sms variant="Bold" />}
               />
               <Button
                  text="Obtener"
                  rightIcon={<ArrowCircleRight variant="Bold" />}
               />
            </div>
         </div>
         <div className="image-subscribe">
            <img src="images/webp/girl-with-table.webp" alt="" />
         </div>
      </div>
   );
}

export default Subscribe;
