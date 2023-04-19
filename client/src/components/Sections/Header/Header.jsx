import React, { useState, useEffect } from "react";
import "./Header.css";
import { Button } from "../../Buttons/Button";
import PeopleRoundedBackground from "../../Decorations/PeopleRoundedBackground/PeopleRoundedBackground";
import { TextField } from "../../TextFields/TextField";
import { ArrowCircleRight, Sms } from "iconsax-react";
import {
  API_KEY,
  CLIENT_EMAIL,
  PRIVATE_KEY,
  SPREADSHEET_ID,
  CLIENT_ID,
} from "../../../../../config";

// import axios from "axios";
function Header() {
  useEffect(() => {
    // Inicializa la API de Google Sheets con tus credenciales de Google Cloud Console
    window.gapi.load("client", () => {
      window.gapi.client
        .init({
          apiKey: API_KEY,
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4",
          ],
          clientId: CLIENT_ID,
          scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
        })
        .then(() => {
          return gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: "A1", // for example: List 1!A1:B6
          });
        })
        .then((response) => {
          // parse the response data
          const loadedData = response.result.values;
          console.log(loadedData);
        });
    });

    // Función para obtener el contenido de la celda
  }, []);
  // // form states
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [designation, setDesignation] = useState("");
  // const [salary, setSalary] = useState("");

  // // getting data function
  // const getData = () => {
  //   axios
  //     .get("https://sheet.best/api/sheets/a623b1a3-9a4a-4510-b41f-fe60daba5916")
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // };

  // // triggering function
  // // useEffect(() => {
  // //   getData();
  // // }, [data]);
  return (
    <header>
      <div className="hero">
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
