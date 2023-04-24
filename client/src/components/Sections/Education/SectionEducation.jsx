import React from "react";
import "./SectionEducation.css";

function SectionEducation() {
  return (
    <section className="section-education">
      <div className="section-container">
        <div className="image">
          <img src="images/kids.jpg" alt="" />
        </div>
        <div className="section-content">
          <h2>Aspectos de nuestra educación</h2>
          <ul>
            <li>
              <p className="headline">
                Enfoque en la educación financiera temprana
              </p>
            </li>
            <li>
              <p className="headline">Metodología didáctica y entretenida</p>
            </li>
            <li>
              <p className="headline">Profesionales expertos en finanzas</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionEducation;
