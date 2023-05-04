import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Whatsapp } from "iconsax-react";

export function Button(props) {
   return (
      <motion.button
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="button"
         style={props.style}
         onClick={props.onClick}
         type={props.type}
         href={props.href}>
         {props.leftIcon ? <i>{props.leftIcon}</i> : ""}
         {props.href ? (
            <Link to={props.href} style={{ color: "#fff" }}>
               {props.text}
            </Link>
         ) : (
            props.text
         )}
         {props.rightIcon ? <i>{props.rightIcon}</i> : ""}
      </motion.button>
   );
}
export function FloatButton(props) {
   return (
      <a
         href="https://api.whatsapp.com/send?phone=+58-0424-3151580&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20Crefinex"
         target="_blank"
         className="whatsapp-btn">
         <Whatsapp variant="Bold" />
      </a>
   );
}

export default Button;
