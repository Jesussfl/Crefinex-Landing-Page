import React from "react";
import "./TextField.css";
export function TextField(props) {
  const InputComponent = props.multiline ? "textarea" : "input";
  return (
    <div className="text-field-wrapper" style={props.style}>
      <p className="label callout">{props.label}</p>
      <div className="text-field-container">
        {props.leftIcon ? <i>{props.leftIcon}</i> : ""}
        <InputComponent type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  );
}

export default TextField;
