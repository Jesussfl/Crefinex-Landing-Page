import React from "react";
import "./TextField.css";
export function TextField(props) {
  const InputComponent = props.multiline ? "textarea" : "input";
  return (
    <div className="text-field-wrapper" style={props.style}>
      <label className="label callout">{props.label}</label>
      <div className="text-field-container">
        {props.leftIcon ? <i>{props.leftIcon}</i> : ""}
        <InputComponent
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default TextField;
