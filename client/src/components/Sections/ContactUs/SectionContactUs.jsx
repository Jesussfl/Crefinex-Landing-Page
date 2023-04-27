import React, { useState, useEffect, useRef } from "react";
import { TextField } from "../../TextFields/TextField";
import { Button } from "../../Buttons/Button";
import NavItem from "../../NavItem/NavItem";
import "./SectionContactUs.css";
import emailjs from "@emailjs/browser";
import Loader from "../../Loader/Loader";
import LazyLoad from "react-lazy-load";
function SectionLocation(props) {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    user_name: "",
    user_last_name: "",
    user_email: "",
    user_message: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_0jgwxsl",
        "template_xaw666b",
        form.current,
        "6iK_DQEtWGw-jMvrP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setValues({
            user_name: "",
            user_last_name: "",
            user_email: "",
            user_message: "",
          });
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  // ...

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  return (
    <section className="section-location" id="contactUs">
      <div className="contactUs-wrapper">
        <div className="copys-location">
          {/* <img id="map-icon" src="/images/map-pin-dynamic-color.png" alt="" /> */}
          <div className="texts">
            <h2>Contáctanos</h2>
            <p className="body-large">Estaremos encantados de atenderte.</p>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <form className="flex-container" ref={form} onSubmit={sendEmail}>
              <TextField
                style={{ flexGrow: 0, flexBasis: "calc(50% - 8px)" }}
                label="Nombre"
                type="text"
                placeholder="Primer Nombre"
                name="user_name"
                value={values.user_name}
                onChange={handleChange}
              />
              <TextField
                style={{ flexGrow: 0, flexBasis: "calc(50% - 8px)" }}
                label="Apellido"
                type="text"
                name="user_last_name"
                placeholder="Primer Apellido"
                value={values.user_last_name}
                onChange={handleChange}
              />
              <TextField
                style={{ flexBasis: "100%" }}
                label="Correo Electrónico"
                type="email"
                placeholder="Correo Electrónico"
                name="user_email"
                value={values.user_email}
                onChange={handleChange}
              />
              <TextField
                style={{ flexBasis: "100%" }}
                label="Tu mensaje"
                multiline={true}
                type="text"
                name="user_message"
                value={values.user_message}
                onChange={handleChange}
                title="Tu mensaje"
                placeholder="Tu mensaje"
              ></TextField>
              <Button
                style={{ marginTop: "16px", height: "48px", flexBasis: "100%" }}
                text="Enviar"
                type="submit"
                value="Enviar"
                onClick={sendEmail}
              ></Button>
            </form>
          )}

          <NavItem />
          <p className="callout">{props.data.Ubicacion}</p>
        </div>
        <LazyLoad offset={400} className="map-wrapper">
          <iframe
            style={{ width: "100%", height: "100%", borderRadius: "16px" }}
            className="gmap_iframe"
            name="map_iframe"
            title="map_iframe"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Crefinex maracay&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </LazyLoad>
      </div>
    </section>
  );
}

export default SectionLocation;
