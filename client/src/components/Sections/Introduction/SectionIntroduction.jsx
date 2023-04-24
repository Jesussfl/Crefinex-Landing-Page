import React from "react";
import "./SectionIntroduction.css";
import { motion } from "framer-motion";

function SectionIntroduction() {
  return (
    <section className="section-introduction" style={{ display: "flex" }}>
      <div className="introduction-section-wrapper">
        <motion.div
          className="info title"
          whileHover={{
            scale: 1.09,

            backgroundColor: "#FF4463",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <h6>Cursos</h6>
          <p className="headline">
            Nuestros cursos están diseñados para niños, niñas y adolescentes
          </p>
          <p className="callout">Ver más</p>
        </motion.div>
        <span></span>
        <motion.div
          className="info"
          whileHover={{
            scale: 1.09,

            backgroundColor: "#FF4463",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="images/rocket-dynamic-color.png" alt="" />
          <p className="headline">Pensamiento Creativo</p>
          <p className="callout">Ver más</p>
        </motion.div>
        <motion.div
          className="info"
          whileHover={{
            scale: 1.09,

            backgroundColor: "#FF4463",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="images/target-dynamic-color.png" alt="" />
          <p className="headline">Actividades Dinamicas</p>
          <p className="callout">Ver más</p>
        </motion.div>
        <motion.div
          className="info"
          whileHover={{
            scale: 1.09,
            backgroundColor: "#FF4463",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="images/dollar-dollar-color.png" alt="" />
          <p className="headline">Preparacion Financiera</p>
          <p className="callout">Ver más</p>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionIntroduction;
