import React from "react";
import "./SectionSubscribe.css";
import Button from "../../Buttons/Button";
import TextField from "../../TextFields/TextField";
import { ArrowCircleRight, Sms } from "iconsax-react";

function Subscribe() {
  return (
    <div className="section-subscribe">
      <div className="copys-subscribe">
        <h2>Mejoremos el futuro financiero de tu hijo.</h2>
        <p className="headline">Adquiere nuestra guía gratuita</p>
        <div className="actions">
          <TextField type="text" leftIcon={<Sms variant="Bold" />} />
          <Button
            text="Obtener"
            rightIcon={<ArrowCircleRight variant="Bold" />}
          />
        </div>
      </div>
      <div className="image-subscribe">
        <img src="images/girl-with-table.png" alt="" />
      </div>
    </div>
  );
}

export default Subscribe;
