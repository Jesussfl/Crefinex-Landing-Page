import React from "react";
import "./SectionAboutUs.css";
function SectionAboutUs() {
  return (
    <div className="section-aboutus">
      <div className="aboutus-content">
        <h2>¿Quiénes Somos?</h2>
        <p className="body-large">
          Somos una empresa dedicada a la educación financiera para niños.
          Creemos que la enseñanza de esta área es esencial para que los niños
          puedan tomar decisiones financieras responsables y planificar su
          futuro de manera efectiva.
        </p>
        <h3 className="blue">Nuestra Misión</h3>
        <div className="list">
          <img src="" alt="" />
          <p>Educar sobre finanzas de una forma divertida.</p>
        </div>
        <div className="list">
          <img src="" alt="" />
          <p>Enseñar la importancia del ahorro y la inversión.</p>
        </div>
        <div className="list">
          <img src="" alt="" />
          <p>Educar para un futuro financiero sólido.</p>
        </div>
      </div>
      <div className="aboutus-image">
        <div className="image">
          <img src="images/Yismary.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SectionAboutUs;
