import React from "react";
import "./PeopleRoundedBackground.css";
function PeopleRoundedBackground(props) {
  return (
    <div style={props.style} className="people-container">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default PeopleRoundedBackground;
