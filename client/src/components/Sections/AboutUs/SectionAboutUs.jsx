import React, { useRef } from "react";
import "./SectionAboutUs.css";
import { Confetti } from "../../Decorations/Confetti/Confetti";
import { useInView } from "framer-motion";
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
   const ref = useRef(null);
   const isInView = useInView(ref);
   return (
      <section ref={ref} className="section__aboutus" id="aboutUs">
         <div className="section__aboutus-wrapper">
            {confettiStyles.map((style) => (
               <Confetti
                  key={style.color}
                  color={style.color}
                  style={style}
                  size="36px"
               />
            ))}
            <div className="aboutus__content">
               <h2 className="red">¿Quiénes Somos?</h2>
               <p className="headline">
                  Somos una empresa dedicada a la educación financiera para
                  niños. Creemos que la enseñanza de esta área es esencial para
                  que los niños puedan tomar decisiones financieras responsables
                  y planificar su futuro de manera efectiva.
               </p>
               <h2 className="blue">Nuestra Misión</h2>
               <ul className="aboutus__list">
                  {missionListItems.map(({ id, icon, text }) => (
                     <li key={id} className="aboutus__list-item">
                        <img src={icon} alt="mision-icono" />
                        <p className="headline">{text}</p>
                     </li>
                  ))}
               </ul>
            </div>
            <div
               className="aboutus__image-container"
               style={{
                  backgroundImage:
                     "url(https://ik.imagekit.io/jeflr/Crefinex-Landing-Page/Team/Aboutus-bg.jpg?updatedAt=1683125049497)",
               }}>
               <h3
                  style={{
                     transform: isInView
                        ? "translateX(50%)"
                        : "translateX(-200px)",
                     transition:
                        "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.8s",
                  }}>
                  Prof. Yismary Arias
               </h3>
               <img
                  src="https://ik.imagekit.io/jeflr/Crefinex-Landing-Page/Team/DSC08828-PhotoRoom.png-PhotoRoom.png?updatedAt=1683118179291"
                  alt="yismary-arias profesora"
                  className="aboutus__image"
               />
            </div>
         </div>
      </section>
   );
}

export default SectionAboutUs;
