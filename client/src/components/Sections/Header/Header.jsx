import React, { useState, useEffect } from "react";
import "./Header.css";

//Methods
import { loadSheetData } from "../../../api/googleSheetAPI";

//Components
import PeopleRoundedBackground from "../../Decorations/PeopleRoundedBackground/PeopleRoundedBackground";
import { Button } from "../../Buttons/Button";
import { TextField } from "../../TextFields/TextField";
import { Confetti } from "../../Decorations/Confetti/Confetti";

//Icons
import { ArrowCircleRight, Sms } from "iconsax-react";

function Header() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load content
  useEffect(() => {
    window.gapi.load("client", () => {
      loadSheetData("Cabecera", "A3").then((loadedData) => {
        console.log(loadedData);
        setDescription(loadedData[0][0]);
      });
    });
  }, []);

  return (
    <header>
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
        <h1>
          Mejora el futuro <span className="red">financiero</span> de tus{" "}
          <span className="blue">hijos</span> con nosotros.
        </h1>
        <p className="body-large">{description}</p>
        <div className="actions-container">
          <TextField type="text" leftIcon={<Sms variant="Bold" />} />
          <Button
            text="Obtener Guía Gratuita"
            rightIcon={<ArrowCircleRight variant="Bold" />}
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
          src="images/img3.png"
        />
        <PeopleRoundedBackground
          className="people2"
          style={{
            backgroundColor: "var(--primary-color)",
            bottom: "-60px",
            left: "25%",
          }}
          src="images/img1.png"
        />
        <PeopleRoundedBackground
          className="people3"
          style={{
            backgroundColor: "var(--secondary-color-yellow)",
            bottom: "-60px",
            right: "25%",
          }}
          src="images/img2.png"
        />
        <PeopleRoundedBackground
          className="people4"
          style={{
            backgroundColor: "var(--secondary-color-blue)",
            bottom: "2%",
            right: "3%",
          }}
          src="images/img4.png"
        />
      </div>
      <div className="people-images"></div>
    </header>
  );
}

export default Header;
