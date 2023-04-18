import React, { useState } from "react";
import "./Header.css";
import { Button } from "../../Buttons/Button";
import PeopleRoundedBackground from "../../Decorations/PeopleRoundedBackground/PeopleRoundedBackground";
import { TextField } from "../../TextFields/TextField";
import { ArrowCircleRight, Sms } from "iconsax-react";
import axios from "axios";
function Header() {
  // form states
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");

  // getting data function
  const getData = () => {
    axios
      .get("https://sheet.best/api/sheets/a623b1a3-9a4a-4510-b41f-fe60daba5916")
      .then((response) => {
        console.log(response.data);
      });
  };

  // triggering function
  // useEffect(() => {
  //   getData();
  // }, [data]);
  return (
    <header>
      <div className="hero" onClick={getData}>
        <h1>
          Mejora el futuro <span className="red">financiero</span> de tus{" "}
          <span className="blue">hijos</span> con nosotros.
        </h1>
        <p className="body-large">
          ¡Aprender finanzas nunca fue tan divertido! Únete a Crefinex y enseña
          a tus hijos habilidades financieras que les durarán toda la vida.
        </p>
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
