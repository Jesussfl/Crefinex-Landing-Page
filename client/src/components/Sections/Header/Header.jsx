import React from "react";
import "./Header.css";

//Methods
import { handleScrollTo } from "../../../controllers/scroller";

//Components
import PeopleRoundedBackground from "../../Decorations/PeopleRoundedBackground/PeopleRoundedBackground";
import { Button } from "../../Buttons/Button";
import { Confetti } from "../../Decorations/Confetti/Confetti";
import InViewEffect from "../../Decorations/InViewEffect/InViewEffect";

//Icons
import { ArrowCircleDown } from "iconsax-react";

function Header(props) {
   return (
      <header id="header">
         <Confetti
            style={{
               position: "absolute",
               top: "15.5%",
               left: "-20px",
               transform: "rotate(-45deg)",
               zIndex: "-1",
            }}
            color="#5171e2"
            size="36px"
         />
         <Confetti
            style={{
               position: "absolute",
               top: "35%",
               left: "10px",
               transform: "rotate(10deg)",
               zIndex: "-1",
            }}
            color="#ffe607"
            size="36px"
         />
         <Confetti
            style={{
               position: "absolute",
               top: "15.5%",
               right: "-20px",
               transform: "rotate(20deg)",
               zIndex: "-1",
            }}
            color="#ff4463"
            size="36px"
         />
         <Confetti
            style={{
               position: "absolute",
               top: "32%",
               right: "10px",
               transform: "rotate(-30deg)",
               zIndex: "-1",
            }}
            color="#7f3dea"
            size="36px"
         />
         <div className="hero">
            <InViewEffect>
               <h1>
                  Mejora el futuro <span className="red">financiero</span> de
                  tus <span className="blue">hijos</span> con nosotros.
               </h1>
            </InViewEffect>
            <InViewEffect>
               <p className="body-large">{props.data.Subtitulo}</p>
            </InViewEffect>
            <div className="actions-container">
               <Button
                  text="Ver Nuestros Cursos"
                  onClick={() => handleScrollTo("courses", 0)}
                  rightIcon={<ArrowCircleDown variant="Bold" />}
               />
            </div>
         </div>
         <div className="people">
            {" "}
            <PeopleRoundedBackground
               className="people1"
               style={{
                  backgroundColor: "var(--secondary-color-red)",
                  bottom: "2%",
                  left: "3%",
               }}
               src="/images/webp/img3.webp"
            />
            <PeopleRoundedBackground
               className="people2"
               style={{
                  backgroundColor: "var(--primary-color)",
                  bottom: "-60px",
                  left: "25%",
               }}
               src="/images/webp/img1.webp"
            />
            <PeopleRoundedBackground
               className="people3"
               style={{
                  backgroundColor: "var(--secondary-color-yellow)",
                  bottom: "-60px",
                  right: "25%",
               }}
               src="/images/webp/img2.webp"
            />
            <PeopleRoundedBackground
               className="people4"
               style={{
                  backgroundColor: "var(--secondary-color-blue)",
                  bottom: "2%",
                  right: "3%",
               }}
               src="/images/webp/img4.webp"
            />
         </div>
         <div className="people-images"></div>
      </header>
   );
}

export default Header;
