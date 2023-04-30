import React from "react";
import "./SectionAboutUs.css";
import { Confetti } from "../../Decorations/Confetti/Confetti";

const confettiStyles = [
  {
    position: "absolute",
    top: "65.5%",
    right: "0px",
    transform: "rotate(-45deg)",
    color: "#5171e2",
  },
  {
    position: "absolute",
    top: "60.5%",
    left: "-8px",
    transform: "rotate(45deg)",
    color: "#ffe607",
  },
  {
    position: "absolute",
    top: "55.5%",
    left: "50%",
    transform: "rotate(10deg)",
    color: "#7f3dea",
    zIndex: -1,
  },
];

const missionListItems = [
  {
    id: "fun-finance",
    icon: "images/btc-coin.png",
    text: "Educar sobre finanzas de una forma divertida.",
  },
  {
    id: "saving-investment",
    icon: "images/btc-coin.png",
    text: "Enseñar la importancia del ahorro y la inversión.",
  },
  {
    id: "solid-financial-future",
    icon: "images/btc-coin.png",
    text: "Educar para un futuro financiero sólido.",
  },
];

function SectionAboutUs() {
  return (
    <section className="section-aboutus" id="aboutUs">
      <div className="aboutus-wrapper">
        {confettiStyles.map((style) => (
          <Confetti
            key={style.color}
            color={style.color}
            style={style}
            size="36px"
          />
        ))}
        <div className="aboutus-content">
          <h2>¿Quiénes Somos?</h2>
          <p className="body-large">
            Somos una empresa dedicada a la educación financiera para niños.
            Creemos que la enseñanza de esta área es esencial para que los niños
            puedan tomar decisiones financieras responsables y planificar su
            futuro de manera efectiva.
          </p>
          <h3 className="blue">Nuestra Misión</h3>
          <ul className="mission-list">
            {missionListItems.map(({ id, icon, text }) => (
              <li key={id} className="list">
                <img src={icon} alt="" />
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="aboutus-image">
          <div className="image">
            <img src="images/webp/Yismary.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutUs;
