import React from "react";
import "./List.css";
function List({ icon, title, description }) {
   return (
      <div className="list__container">
         <div className="list__leftIcon">{icon}</div>
         <div className="list__texts">
            <p className="list__title">{title}</p>
            <p className="list__subtitle callout">{description}</p>
         </div>
      </div>
   );
}

export default List;
