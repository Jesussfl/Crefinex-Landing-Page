import React from "react";
import { motion } from "framer-motion";
function ModalContentSection({ type, content }) {
   return (
      <motion.div className="modal__row" variants={modalRowVariants}>
         <h6>¿Qué se aprenderá?</h6>
         <p>{content}</p>
      </motion.div>
   );
}
const modalRowVariants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "10%" },
};
export default ModalContentSection;
