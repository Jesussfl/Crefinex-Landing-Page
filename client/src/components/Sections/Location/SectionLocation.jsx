import React, { useState, useEffect } from "react";
import { TextField } from "../../TextFields/TextField";
import { Button } from "../../Buttons/Button";
import NavItem from "../../NavItem/NavItem";
import "./SectionLocation.css";

function SectionLocation(props) {
  return (
    <section className="section-location" id="contactUs">
      <div className="copys-location">
        <div className="texts">
          <h2>Contáctanos</h2>
          <p className="body-large">Estaremos encantados de atenderte.</p>
        </div>
        <div className="flex-container">
          <TextField
            style={{ flexGrow: 0, flexBasis: "calc(50% - 8px)" }}
            label="Nombre"
            placeholder="Primer Nombre"
          />
          <TextField
            style={{ flexGrow: 0, flexBasis: "calc(50% - 8px)" }}
            label="Apellido"
            placeholder="Primer Apellido"
          />
          <TextField
            style={{ flexBasis: "100%" }}
            label="Correo Electrónico"
            placeholder="Correo Electrónico"
          />
          <TextField
            style={{ flexBasis: "100%" }}
            label="Tu mensaje"
            multiline={true}
          ></TextField>
          <Button
            style={{ marginTop: "16px", height: "48px", flexBasis: "100%" }}
            text="Enviar"
          ></Button>
        </div>
        <NavItem />
        <p className="callout">{props.data.Ubicacion}</p>
      </div>
      <div className="map-wrapper">
        <iframe
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          className="gmap_iframe"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Crefinex maracay&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
}

export default SectionLocation;
