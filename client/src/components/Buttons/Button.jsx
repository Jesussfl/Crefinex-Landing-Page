import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button(props) {
  return (
    <button>
      {props.leftIcon ? <i>{props.leftIcon}</i> : ""}
      {props.text}
      {props.rightIcon ? <i>{props.rightIcon}</i> : ""}
    </button>
  );
}
export function ButtonLink(props) {
  return (
    <button className="btn-link body-btn">
      <Link>{props.text}</Link>
    </button>
  );
}

export default Button;
