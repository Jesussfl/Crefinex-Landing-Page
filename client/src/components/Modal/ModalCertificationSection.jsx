import React from "react";
import { motion } from "framer-motion";
function ModalCertificationSection() {
   return (
      <motion.div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
         <h6>¿Que obtengo al adquirir la certificación?</h6>
         <p>- Garantía de 7 días sin condiciones.</p>
         <p>- 6 bonos exclusivos creciendo con Crefinex</p>
         <p>- Asesoría exclusiva en los grupos crefinex</p>
         <p>- 4 acompañamiento personalizado</p>
      </motion.div>
   );
}

export default ModalCertificationSection;
