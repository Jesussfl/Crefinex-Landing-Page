import React from "react";
import "./SectionAboutUs.css";
import { Confetti } from "../../Decorations/Confetti/Confetti";

function SectionAboutUs() {
  return (
    <div className="section-aboutus">
      <div className="aboutus-wrapper">
        <Confetti
          style={{
            position: "absolute",
            top: "65.5%",
            right: "0px",
            transform: "rotate(-45deg)",
          }}
          color="#5171e2"
          size="36px"
        />
        <Confetti
          style={{
            position: "absolute",
            top: "60.5%",
            left: "-8px",
            transform: "rotate(45deg)",
          }}
          color="#ffe607"
          size="36px"
        />
        <Confetti
          style={{
            position: "absolute",
            top: "55.5%",
            left: "50%",
            transform: "rotate(10deg)",
          }}
          color="#7f3dea"
          size="36px"
        />
        <div className="aboutus-content">
          <h2>¿Quiénes Somos?</h2>
          <p className="body-large">
            Somos una empresa dedicada a la educación financiera para niños.
            Creemos que la enseñanza de esta área es esencial para que los niños
            puedan tomar decisiones financieras responsables y planificar su
            futuro de manera efectiva.
          </p>
          <h3 className="blue">Nuestra Misión</h3>
          <div className="mision-list">
            <div className="list">
              <img src="images/btc-coin.png" alt="" />
              <p>Educar sobre finanzas de una forma divertida.</p>
            </div>
            <div className="list">
              <img src="images/btc-coin.png" alt="" />
              <p>Enseñar la importancia del ahorro y la inversión.</p>
            </div>
            <div className="list">
              <img src="images/btc-coin.png" alt="" />
              <p>Educar para un futuro financiero sólido.</p>
            </div>
          </div>
        </div>
        <div className="aboutus-image">
          <div className="image">
            <img src="images/Yismary.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionAboutUs;
