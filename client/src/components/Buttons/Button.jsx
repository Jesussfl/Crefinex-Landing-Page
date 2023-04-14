import React from "react";
import "./Button.css";
export function Button(props) {
  return (
    <button>
      {props.leftIcon ? <i>{props.leftIcon}</i> : ""}
      {props.text}
      {props.rightIcon ? <i>{props.rightIcon}</i> : ""}
    </button>
  );
}

export default Button;
