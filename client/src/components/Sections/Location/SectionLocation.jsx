import React from "react";
import "./SectionLocation.css";
function SectionLocation() {
  return (
    <div className="section-location">
      <div className="copys-location">
        <p className="body-large">Nuestra Ubicación</p>
        <h6>
          Venezuela - Estado Aragua, Maracay. Avenida Bolívar - Oeste. Centro
          Comercial Pacífico, Piso 6 a 50 Metros Del C.C. Parque Aragua donde se
          encuentra el colegio de contadores públicos.{" "}
        </h6>
      </div>
      <div className="map">
        <iframe
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          class="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Crefinex maracay&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}

export default SectionLocation;
