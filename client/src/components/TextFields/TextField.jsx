import React from "react";
import "./TextField.css";
export function TextField(props) {
  return (
    <div className="text-field-container">
      <i>{props.leftIcon}</i>
      <input type={props.type} placeholder="Introduce Tu Correo Electrónico" />
    </div>
  );
}

export default TextField;
