import React from "react";
import "./PeopleRoundedBackground.css";
import { m } from "framer-motion";
function PeopleRoundedBackground(props) {
   return (
      <m
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
         }}
         style={props.style}
         className={`people-container ${props.className}`}>
         <img src={props.src} alt={props.alt} />
      </m>
   );
}

export default PeopleRoundedBackground;
