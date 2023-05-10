import React from "react";
import { motion } from "framer-motion";
function ModalWhoSection() {
   return (
      <motion.div variants={ModalWhoSectionVariants}>
         <h6>¿Para quién es este curso?</h6>
         <ul>
            <li>Para toda persona que desee un mejor futuro a su hijo.</li>
            <li>Para toda persona que desee reconocer sus emociones.</li>
            <li> Para todas las personas que deseen fomentar el sentido del ahorro en sus hijos.</li>
            <li>Para toda persona que desee manejar mejor su dinero.</li>
            <li>Para todas las personas que deseen crecer a nivel financiero.</li>
            <li>Para principiantes que deseen Aprender cómo funciona el banco.</li>
            <li>Para principiantes que deseen Aprender la importancia de la toma de decisiones.</li>
            <li>Para los padres que deseen que sus hijos tengan una educación actualizada a la realidad.</li>
            <li>Para los padres que quieran hijos independientes capaces de tomar sus propias decisiones.</li>
            <li>Para los padres que quieren que sus hijos tengan más oportunidades en el futuro.</li>
         </ul>
      </motion.div>
   );
}
const ModalWhoSectionVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "10%" },
};
export default ModalWhoSection;
