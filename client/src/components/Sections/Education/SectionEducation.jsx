import React from "react";
import "./SectionEducation.css";

function SectionEducation() {
  return (
    <div className="section-education">
      <div className="section-container">
        <div className="image"></div>
        <div className="section-content">
          <h5>Educación Tradicional</h5>
          <ul>
            <li>
              <p className="headline">Actividades Lúdicas</p>
            </li>
            <li>
              <p className="headline">Compañerismo y Trabajo en equipo</p>
            </li>
            <li>
              <p className="headline">Refuerzo de temas complejos</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionEducation;
