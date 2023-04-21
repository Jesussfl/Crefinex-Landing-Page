import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Button(props) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="button"
      style={props.style}
      onClick={props.onClick}
    >
      {props.leftIcon ? <i>{props.leftIcon}</i> : ""}
      {props.text}
      {props.rightIcon ? <i>{props.rightIcon}</i> : ""}
    </motion.button>
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
