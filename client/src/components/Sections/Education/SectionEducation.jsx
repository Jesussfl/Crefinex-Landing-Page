import React from "react";
import "./SectionEducation.css";
import LazyLoad from "react-lazy-load";

function SectionEducation() {
  return (
    <section className="section-education">
      <div className="section-education-container">
        <LazyLoad height={456} offset={300} className="image">
          <img src="images/kids.jpg" alt="" />
        </LazyLoad>
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
